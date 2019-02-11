const config = require('../config');


const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const async = require('async');
const expect = chai.expect;

// Put all the sorters credentials here
let sorters = [
    {email: 'sorting@logistikus.com', password: 'secret'}, 
    {email: 'azipagan@logistikus.com', password: 'secret'},
    {email: 'lrojas@logistikus.com', password: 'secret'},
    {email: 'mrivarez@logistikus.com', password: 'secret'},
    {email: 'rosabel@logistikus.com', password: 'secret'},
    {email: 'dolaivar@logistikus.com', password: 'secret'},
    {email: 'jlromuar@logistikus.com', password: 'secret'},
    {email: 'jgalicia@logistikus.com', password: 'secret'},
    {email: 'jdalman@logistikus.com', password: 'secret'},
    {email: 'jorasa@logistikus.com', password: 'secret'},
    {email: 'agrajeda@logistikus.com', password: 'secret'},
    {email: 'mgonzales@logistikus.com', password: 'secret'},
    {email: 'apaltao@logistikus.com', password: 'secret'},
    {email: 'mdesmeralda@logistikus.com', password: 'secret'}
];

describe('Login users to get token', function (done) {

    this.timeout(5000 * sorters.length);

    before('Get tokens', function (done) {
        
        async.map(sorters, get_token, (err, result) => {
            if (err) done(err);

            sorters = result;

            done();
        });
    });

    it('should set token to sorters', function () {
        sorters.forEach((sorter) => {
            expect(sorter).to.have.property('token');
            expect(sorter.token).to.exist;
        });
    });

    function get_token (sorter, cb) {

        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send(sorter)
            .expect(200)
            .end(function (err, result) {
                if (err) {
                    console.log(sorter)
                    console.log(result.body);
                    throw err;
                }

                const token = result.header['x-access-token'];

                sorter.token = token;

                cb(null, sorter);
            });
    }
});

describe('SORT: POST /item/sort', function () {

    let items = [];

    it('Get all items to be sorted', function (done) {
        const token = sorters[0].token;

        request
            .get(`/staging?date=2019-02-11`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items = result.body.data.items.map((s) => {return s.container_id;});

                items = Array.from(new Set(items));
                items = items.map((s) => { return { container_id: s};});

                expect(items.length, 'No items to sort').to.be.above(0);

                done();
            });
    });

    it('it should sort all items to be sorted', function (done) {

        // Distribute the items to the N sorters

        // 1.) Determine the number of items to be sorted by each sorter
        const items_per_sorter = Math.floor(items.length / sorters.length);

        // 2.) Map the items to be sorted by each sorter
        sorters = sorters.map((sorter) => {
            const taken = items.splice(0, items_per_sorter);

            sorter.items = taken;

            return sorter;
        });

        async.each(sorters, sort_items, done);

        function sort_items (sorter, cb) {
            const items = sorter.items;
            const token = sorter.token;
            const email = sorter.email;

            async.eachSeries(items, sort_item, cb);

            function sort_item(item, cb) {
                console.log(`Sorter: ${email} is sorting ${items.length} items`);

                // Before you can sort,
                // Retrieve all customers for that item
                request
                    .get(`/containers/${item.container_id}/sort-list`)
                    .set('x-access-token', token)
                    .expect(200, function (err, result) {
                        if (err) {
                            throw err;
                        }
                        const customers = result.body.data.items;
    
                        customers.forEach((v) => {
                            v.container_id = item.container_id;
    
    
                            if(v.quantity > v.pallet_max_case){
                                v.quantity = v.pallet_max_case;
                            }
                        });
                        
                        // For every customer,
                        // Sort
                        async.eachSeries(customers, sort, _cb);
    
                        function _cb() {
                            cb();
                        }
    
                    });
            }
    
            function sort(item, cb) {
    
                // Separate full pallet subgrids
                const full_pallets = item.subgrids.filter((v) => {
                    return v.fullpallet === 1 && (v.sorted_quantity || 0) < item.pallet_max_case;
                });
                
                // From rollcages
                const rollcages = item.subgrids.filter((v) => {
                    return v.fullpallet === 0;
                });
    
                if(full_pallets.length > 0){
                    const fp = full_pallets[0] 
                    item.dc = fp.grid;
    
                    if(item.quantity + (fp.sorted_quantity || 0) > item.pallet_max_case && item.quantity - (fp.sorted_quantity || 0) > 0){
                        item.dc = rollcages[0].rollcage
                    } else if (item.quantity + (fp.sorted_quantity || 0) > item.pallet_max_case){
                        item.dc = rollcages[0].rollcage
                    }
    
                }else{
                    item.dc = rollcages[0].rollcage;
                }
                
                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        "source_container": item.container_id,
                        "destination_container": item.dc,
                        "quantity": item.quantity
                    })
                    .expect(200, function (err, result) {
                        if (err) {
                            console.log(`x ${email} Failed to sort `,item.container_id, ' to ', item.dc);
                            console.log(result.body);
                            throw err;
                        }
    
                        console.log(`    ✓ ${email} Successfully sorted`,item.container_id, ' to ', item.dc );
    
                        if (full_pallets.length > 0) {
    
                            // item.dc is the grid
                            const data = {
                                grid:   item.dc,
                                pallet: item.container_id
                            };
    
                            assign_pallet_to_grid(data, cb);
                        }
    
                        else{
                            chai.expect(result.body).not.to.have.property('errors');
                            cb();
                        }
                    });
            }
    
            function assign_pallet_to_grid (data, cb) {
                request
                .put('/grid-plan/pallet')
                .set('x-access-token', token)
                .type('json')
                .send({
                    "grid":   data.grid,
                    "pallet": data.pallet
                })
                .expect(200, function (err, result) {
                    if (err) {
                        console.log(`x ${email} Failed to assign pallet to grid. Pallet already assigned`);
                        return cb();
                    }
                    console.log(`✓ ${email} Successfully assigned pallet`, data.pallet, ' to ', data.grid );
                    cb();
                });
            }
        }
    });
});
