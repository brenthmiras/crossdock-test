const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should = require('chai').should();
const async = require('async');

module.exports = function (token, request) {
    let items = [];
    describe('GET /customer-primaries/shipments', function () {
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
                    done();
                });
        });
    });

    describe('POST customer-primaries/:id/shipments', function () {
        it('should confirm primary shipment recommendation', function (done) {
            async.eachSeries(items, confirm_shipment, done)
        });

        function confirm_shipment(row, callback) {
            function send_callback(err, result, args, last_query) {
                if (err) throw err;
                return callback();
            }
            // console.log({
            //         'truck_type' : row.truck_type, 
            //         'category' : row.category, 
            //         'quantity' : row.quantity, 
            //         'rdd' : row.required_delivery_date, 
            //         'created_date' : row.created_date
            // });
            request
                .post(`/customer-primaries/${row.customer_primary_id}/shipments`)
                .type('json')
                .set('Content-Type', 'application/json')
                .set({ 'x-access-token': token })
                .send([{
                    truck_type: `${row.truck_type}`,
                    category: `${row.category}`,
                    quantity: `${row.quantity}`,
                    required_delivery_date: `${row.required_delivery_date}`,
                    created_date: `${row.created_date}`
                }])
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.should.have.property('success', true);
                    send_callback();
                })
        }
    });


    describe('GET /customer-primaries/:id/shipments', function () {
        it('should get all confirmed primary shipments', function (done) {
            async.each(items, customer_primary_by_id, done)
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


