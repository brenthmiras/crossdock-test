const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');
const should  = require('chai').should();
const async = require('async');
module.exports = function (token, request) {
    let customer_primaries_id = [];
    describe('GET /customer-primaries/shipments', function () {
        it('should get all primaries id', function (done) {
            request
                .get('/shipment-primary/recommendation?date=2018-08-02')
                .type('json')
                .set('Content-Type', 'application/json')
                .set({'x-access-token': token})
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.should.have.property('success', true);
                    res.body.should.have.property('data');
                    res.body.data.items.forEach(res => {
                        customer_primaries_id.push(res.customer_primary_id)
                    });
                    done();
                });
        });
    });

    describe('GET /customer-primaries/:id/shipments', function () {
        it('should get all confirmed primary shipments', function (done) {
            async.each(customer_primaries_id, fetch_data, done)
        });
        function fetch_data(row, callback) {

            function send_callback(err, result, args, last_query) {
                if(err) throw err;
                return callback();
            }
    
            request
            .get(`/customer-primaries/${row}/shipments?date=2018-08-02`)
            .type('json')
            .set('Content-Type', 'application/json')
            .set({'x-access-token': token})
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

    describe('POST customer-primaries/:id/shipments', function () {
        it('should confirm primary shipment recommendation', function (done) {
            async.each(customer_primaries_id, confirm_shipment, done)
        });

        function confirm_shipment(row, callback) {
            function send_callback(err, result, args, last_query) {
                if(err) throw err;
                return callback();
            }

            request
            .post(`/customer-primaries/${row}/shipments`)
            .type('json')
            .set('Content-Type', 'application/json')
            .set('x-access-token', token)
            .expect(200, (err, result) => {
                should.not.exist(err);
                should.exist(res);
                res.body.should.have.property('success', true);
                res.body.should.have.property('data');
                // res.body.data.items[0].should.have.property('customer_category_id');
                // res.body.data.items[0].should.have.property('name_trade');
                // res.body.data.items[0].should.have.property('name_registered');
                // res.body.data.items[0].should.have.property('name_alias');
                // res.body.data.items[0].should.have.property('name_abbreviation');
                // res.body.data.items[0].should.have.property('address_billing');
                // res.body.data.items[0].should.have.property('address_shipping');
                // res.body.data.items[0].should.have.property('_address_collection');
                // res.body.data.items[0].should.have.property('contact_person_name');
                // res.body.data.items[0].should.have.property('contact_person_number');
                // res.body.data.items[0].should.have.property('payment_term_id');
                // res.body.data.items[0].should.have.property('area_id');
                // res.body.data.items[0].should.have.property('cluster_id');
                // res.body.data.items[0].should.have.property('check_expiry');
                // res.body.data.items[0].should.have.property('_countering_requirements');
                // res.body.data.items[0].should.have.property('_pickup_time_start');
                // res.body.data.items[0].should.have.property('_pickup_time_end');
                // res.body.data.items[0].should.have.property('_acceptance_time_start');
                // res.body.data.items[0].should.have.property('_acceptance_time_end');
                // res.body.data.items[0].should.have.property('_acceptance_days');
                // res.body.data.items[0].should.have.property('_collection_schedule');
                // res.body.data.items[0].should.have.property('_sales_district');
                // res.body.data.items[0].should.have.property('_sales_office');
                // res.body.data.items[0].should.have.property('_tax_class');
                // res.body.data.items[0].should.have.property('_tax_description');
                // res.body.data.items[0].should.have.property('_tax_number');
                // res.body.data.items[0].should.have.property('_credit_limit');
                // res.body.data.items[0].should.have.property('_receivables');
                // res.body.data.items[0].should.have.property('_documents_for_return');
                // res.body.data.items[0].should.have.property('_account_manager_name');
                // res.body.data.items[0].should.have.property('_account_manager_number');
                // res.body.data.items[0].should.have.property('_price_list');
                // res.body.data.items[0].should.have.property('_price_group');
                // res.body.data.items[0].should.have.property('_service_type_pricing_crossdock');
                // res.body.data.items[0].should.have.property('_service_type_pricing_storage_handling');
                // res.body.data.items[0].should.have.property('_service_type_pricing_storage');
                // res.body.data.items[0].should.have.property('_service_type_pricing_domestic_freight');
                // res.body.data.items[0].should.have.property('_service_type_pricing_ptsd');
                // res.body.data.items[0].should.have.property('_service_type_rate_crossdock');
                // res.body.data.items[0].should.have.property('_service_type_rate_storage_handling');
                // res.body.data.items[0].should.have.property('_service_type_rate_storage');
                // res.body.data.items[0].should.have.property('_service_type_rate_domestic_freight');
                // res.body.data.items[0].should.have.property('_service_type_rate_ptsd');
                // res.body.data.items[0].should.have.property('_customer_stat');
                // res.body.data.items[0].should.have.property('_business_style');
            })
        }
    });
};


