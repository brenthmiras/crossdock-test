const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should = require('chai').should();
const async = require('async');
const moment = require('moment');
module.exports = function (token, request) {
    let items = [];
    describe('Primary Shipment Plan', function () {
        it('should get all primaries id', function (done) {
            request
                .get('/shipment-primary/recommendation')
                .type('json')
                .set('Content-Type', 'application/json')
                .set({ 'x-access-token': token })
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.should.have.property('success', true);
                    res.body.should.have.property('data');
                    res.body.data.items.forEach(res => {
                        items.push(res)
                    });
                    console.log('done getting data from customer-primaries/shipments');
                    done();
                });
        });
  
        it('should confirm primary shipment recommendation', function (done) {
            this.timeout(20000);
            async.eachSeries(items, confirm_shipment, () => {
                console.log('confirmed');
                done();
            });
        });

        function confirm_shipment(row, callback) {
            function send_callback(err, result, args, last_query) {
                if (err) throw err;
                return callback();
            }
     
            request
                .post(`/customer-primaries/${row.customer_primary_id}/shipments`)
                .type('json')
                .set('Content-Type', 'application/json')
                .set({ 'x-access-token': token })
                .send([{
                    truck_type: `${row.truck_type}`,
                    category: `${row.category}`,
                    quantity: `${row.quantity}`,
                    required_delivery_date: `${moment(row.required_delivery_date).format('YYYY-MM-DD')}`,
                    created_date: `${moment(row.created_date).format('YYYY-MM-DD')}`
                }])
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.should.have.property('success', true);
                    send_callback();
                })
        }

        it('should get all confirmed primary shipments', function (done) {
            async.each(items, customer_primary_by_id, () => {
                console.log('retrieved all confirmed shipments');
                done();
            });
        });
        function customer_primary_by_id(row, callback) {
            function send_callback(err, result, args, last_query) {
                if (err) throw err;
                return callback();
            }

            request
                .get(`/customer-primaries/${row.customer_primary_id}/shipments`)
                .type('json')
                .set('Content-Type', 'application/json')
                .set({ 'x-access-token': token })
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.should.have.property('success', true);
                    res.body.should.have.property('data');
                    res.body.data.items[0].should.have.property('id');
                    res.body.data.items[0].should.have.property('customer_primary_id');
                    res.body.data.items[0].should.have.property('truck_type');
                    res.body.data.items[0].should.have.property('category');
                    res.body.data.items[0].should.have.property('shipment_date');
                    res.body.data.items[0].should.have.property('created');
                    res.body.data.items[0].should.have.property('booking_id');
                    send_callback();
            });
        }
    });
};


