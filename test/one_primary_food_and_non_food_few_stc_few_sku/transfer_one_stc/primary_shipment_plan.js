const chai = require('chai');
const expect = chai.expect;
const async = require('async');

module.exports = function (token, request) {

    let recommendations;
    let customer_primary_id;

    describe('GET /shipment-primary/recommendation', function () {
        let result;

        before('Fire http request', function (done) {
            request
            .get('/shipment-primary/recommendation')
            .set('x-access-token', token)
            .send()
            .end(function(err, res) {
                result = res;
                recommendations = res.body.data.items;
                customer_primary_id = recommendations[0].customer_primary_id;
                done();
            });
        });
        
        it('should be successful', function () {
            expect(result.status).to.equal(200);
        });

        it('should contain 5 recommendations', function () {
            const rows = result.body.data.items;
            expect(rows.length).to.equal(5);
        });
    });

    describe('POST /customer-primaries/:id/shipments', function () {
        it('should confirm 5 recommendations', function (done) {
            async.each(recommendations, confirm_shipment, done);

            function confirm_shipment (r, cb) {
                const customer_id = r.customer_primary_id;

                const data = [{
                    truck_type: r.truck_type,
                    category:   r.category,
                    quantity:   r.quantity,
                    required_delivery_date: r.required_delivery_date,
                    created_date: r.created
                }];

                request
                .post(`/customer-primaries/${customer_id}/shipments`)
                .set('x-access-token', token)
                .send(data)
                .end(function(err, res) {
                    result = res;
                    cb();
                });
            }
        });
    });

    describe('GET /customer-primaries/:id/shipments', function () {
        let result;

        before('Fire http request', function (done) {
            request
            .get(`/customer-primaries/${customer_primary_id}/shipments`)
            .set('x-access-token', token)
            .send()
            .end(function(err, res) {
                result = res;
                done();
            });
        });
        
        it('should be successful', function () {
            expect(result.status).to.equal(200);
        });

        it('should contain 5 confirmed primary shipments', function () {
            const rows = result.body.data.items;
            expect(rows.length).to.equal(5);
        });
    });
};