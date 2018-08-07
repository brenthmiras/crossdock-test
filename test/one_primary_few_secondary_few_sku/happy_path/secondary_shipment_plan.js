const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should = require('chai').should();
const async = require('async');
const moment = require('moment')

module.exports = function (token, request) {
    const date = moment().format('YYYY-MM-DD');
    describe('GET /shipment-secondaries/recommendation', function () {
        it('should get all secondary shipments recommendation', function (done) {
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
                        insert_customer_secondaries(i);
                });
                done();
            });
        });
    });

    function insert_customer_secondaries(row) {
        describe('POST /customer-secondaries/:id/shipments', function () {
            it(`should confirm cluster_name ${row.cluster_name}`, function (done) {
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
                    retrieve_secondary_shipment_route(row);
                });
            });
        });
    }
    
    function retrieve_secondary_shipment_route(row){
        describe(`GET /routes/${row.cluster_name}/shipments`, function() {
            it('retrieve secondary shipment per route', function (done) {
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
                    res.body.should.have.property('data');
                    done();
                    finalize_priority(row);
                });
            });
        });
    }

    // function finalize_priority(row) {
    //     describe('PUT customer-secondaries/:id/priority', function () {
    //         it('finalize shipment secondary', function () {
    //             request
    //             .put(`/customer-secondaries/${row.customer_secondary_id}/priority`)
    //             .type('json')
    //             .set('Content-Type', 'application/json')
    //             .set('x-access-token', token)
    //             .send({
    //                 shipment_secondary_id: 
    //             })
    //             .expect(200)
    //             .end((err,res) => {
    //                 should.not.exist(err);
    //                 should.exist(res);
    //                 res.body.should.have.property('success', true);
    //                 res.body.should.have.property('data');
    //             });
    //         });
    //     });
    // }
};

