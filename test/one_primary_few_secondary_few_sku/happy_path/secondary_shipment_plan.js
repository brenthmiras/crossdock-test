const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should = require('chai').should();
const async = require('async');
const moment = require('moment')

module.exports = function (token, request) {
    let items = [],
        date = moment().format('YYYY-MM-DD');
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
                        items.push(i);
                });
                done();
            });
        });
    });

    describe('POST /customer-secondaries/:id/shipments', function () {
        it('should confirm all secondary shipments', function (done) {
            this.timeout(20000);
            async.each(items, confirm_secondary_shipment, () => {
                console.log('confirmed');
                done();
            });
        });

        function confirm_secondary_shipment(row, callback) {
            function send_callback(err, result) {
                if(err) throw err;
                return callback();
            }
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
                    send_callback();
            });
        }
    });

     describe('GET /routes/:id/shipments', function() {
        it('retrieve secondary shipment per route', function (done) {
            this.timeout(20000);
            async.each(items, retrieve_by_route, () => {
                console.log('done retrieveing shipment by route');
                done();
            });
        }); 

        function retrieve_by_route(row, callback) {
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
                    res.body.should.have.property('data');
                    send_callback();
                });
        }
    });
};


