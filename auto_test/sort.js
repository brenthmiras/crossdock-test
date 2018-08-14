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

    before('Get all items to be sorted', function (done) {
        request
            .get(`/staging`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items = result.body.data.items.map((s) => {return s.container_id});

                items = Array.from(new Set(items));
                items = items.map((s) => { return { container_id: s}});
                done();
            });
    });

    it('it sort all received items', function (done) {

        async.each(items, sort_item, done);

        function sort_item(item, cb) {
            
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
                    });
                    
                    async.eachSeries(customers, sort, _cb);

                    function _cb() {
                        cb();
                    }

                });
        }

        function sort(item, cb) {
            const full_pallets = item.subgrids.filter((v) => {
                return v.fullpallet === 1 && v.occupied === 0;
            });
            
            const rollcages = item.subgrids.filter((v) => {
                return v.fullpallet === 0;
            });

            if(full_pallets.length > 0){
                item.dc = full_pallets[0].grid;
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
                        throw err;
                    }
                    chai.expect(result.body).not.to.have.property('errors');
                    cb();
                });
        }

    });

});