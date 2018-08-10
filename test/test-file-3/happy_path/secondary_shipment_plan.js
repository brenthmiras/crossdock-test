const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should = require('chai').should();
const async = require('async');
const moment = require('moment')

module.exports = function (token, request) {
    let items = [],
        routes = [];
        describe('GET /shipment-secondaries/recommendation', function () {
            this.timeout(20000);
            it('should retrieve secondary shipments recommendation', function (done) {
                request
                    .get('/shipment-secondary/recommendation')
                    .type('json')
                    .set('Content-Type', 'application/json')
                    .set('x-access-token', token)
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.should.have.property('success', true);
                        res.body.should.have.property('data');
                        res.body.data.items.forEach(i => {
                            items.push(i);
                            confirm_cluster(i);
                    });
                    done();
                });
            });
        });
  
        function confirm_cluster(row) {
            describe('POST /shipment-secondaries/recommendation', function () {
                it(`should confirmed cluster ${row.cluster_name}`, function(done) {
                    request
                    .post(`/customer-secondaries/${row.cluster_name}/shipments`)
                    .type('json')
                    .set('Content-Type', 'application/json')
                    .set({'x-access-token' : token})
                    .send([{
                        category: `${row.category}`,
                        clusters: [`${row.cluster_name}`],
                        quantity: 1,
                        required_delivery_date: `${moment(row.required_delivery_date).format('YYYY-MM-DD')}`,
                        truck_type: `${row.truck_type}`
                    }])
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.should.have.property('success', true);
                        done();
                    });
                });
            });
        }
            
        describe(`GET /routes/:cluster_name/shipments`, function() {
            it('should retrieve secondary shipment per route', function (done) {
                let date = moment().add(1, 'days').format('YYYY-MM-DD');
                async.each(items, retrieve_routes, function () {
                    console.log('routes retrieved', routes);
                    done();
                })
                function retrieve_routes(row, callback) {
                    function send_callback(err, result) {
                        if(err) throw err;
                        return callback();
                    }
                    request
                    .get(`/routes/${row.cluster_name}/shipments?category=${row.category}&date=${date}`)
                    .type('json')
                    .set('Content-Type', 'application/json')
                    .set('x-acess-token', token)
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.should.have.property('success', true);
                        routes.push(res);
                    });
                    send_callback();
                }
            });
        });

    // function finalize_priority(row) {
    //     describe('PUT customer-secondaries/:id/priority', function () {
    //         it('should finalize priority', function (done) {
    //             console.log(row);
    //             request
    //             .get(`/customer-secondaries/${row.customer_secondary_id}/priority`)
    //             .type('json')
    //             .set('Content-Type', 'application/json')
    //             .set('x-access-token', token)
    //             .expect(200)
    //             .end((err,res) => {
    //                 should.not.exist(err);
    //                 should.exist(res);
    //                 res.body.should.have.property('success', true);
    //                 res.body.should.have.property('data');
    //                 done();
    //             });
    //         });
    //     });
    // }
};
