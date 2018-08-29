const config = require('../config');


const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const async = require('async');

let token;

describe('Login user to get token', function () {
    it('should be successful', function (done) {
        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                email: 'sorting@cdi.com',
                password: 'secret'
            })
            .end(function (err, result) {
                token = result.header['x-access-token'];
                done();
            });
    });

});

describe('SORT: POST /item/sort', function () {

    let items;
    let result = [];
    before('Get all items to be sorted', function (done) {
        request
            .get(`/staging?date=2018-08-29`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items = result.body.data.items.map((s) => {return s.container_id;});

                items = Array.from(new Set(items));
                items = items.map((s) => { return { container_id: s};});
                done();
            });
    });

    it('it should sort all items to be sorted', function (done) {
        async.eachSeries(items, sort_item, sort);

        function sort_item(item, cb) {
                    
            request
                .get(`/containers/${item.container_id}/sort-list`)
                .set('x-access-token', token)
                .expect(200, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    const customers = result.body.data.items;

                    async.eachSeries(customers, is_fullpallet, _cb);

                    function _cb() {
                        cb();
                    }

                });
        }

        function is_fullpallet(item, cb) {
            let {subgrids, quantity} = item;
            let qty = item.quantity;
            let dc;
           
                for(let v of subgrids) {

                    if(v.fullpallet) {
                        quantity = ((item.pallet_max_case % v.sorted_quantity) || item.quantity);
                        quantity == item.quantity ? v.sorted_quantity = item.quantity : '';
                        console.log('asdasdasdsa',item.pallet_max_case, v.sorted_quantity, quantity, item.container_id);
                        dc = v.grid;
                    }else {
                        quantity = qty;
                        dc = v.rollcage;
                        v.sorted_quantity = item.quantity ;
                    }

                    result.push({
                        "source_container": item.container_id,
                        "destination_container": dc,
                        "quantity": quantity
                    }); 
                    qty = item.quantity - quantity;
                    if(v.sorted_quantity == item.quantity) {
                        break;
                    }
                }
            cb();
        }

        function sort() {
            async.eachSeries(result, sort_item, done);

            function sort_item(item, cb) {
                request
                .post('/item/sort')
                .set('x-access-token', token)
                .type('json')
                .send(item)
                .expect(200, function (err, result) {
                    if (err) {
                        console.log(result.body);
                        throw err;
                    }
                    // console.log('    ✓ Successfully sorted',item.source_container, ' to ', item.destination_container );
                    chai.expect(result.body).not.to.have.property('errors');
                    cb();
                });
            }
        }
    });
});