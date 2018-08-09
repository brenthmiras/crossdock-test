const config = require('../../../config');


const request = require('supertest')(config.BASE_URL);
const chai = require('chai');

let token;

describe('POST /auth/login', function () {
    it('should be able to login', function (done) {
        // Pass
        this.timeout(20000);
        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                "email": "admin@cdi.com",
                "password": "secret"
            })
            .expect(200, function (err, result) {

                chai.expect(result.header).to.have.property('x-access-token');

                token = result.header['x-access-token'];
                console.log(token);

                // describe('Order management', function () {
                //     require('./order_management')(token, request);
                // });

                // describe('Resource plan', function () {
                //     require('./resource_plan')(token, request);
                // });

                // describe('Inbound', function () {
                //     require('./item_movement/inbound-8')(token, request);
                // });

                // describe('Putaway', function () {
                //     require('./item_movement/putaway-8')(token, request);
                // });

                // describe('Primary shipment plan', function () {
                //     require('./primary_shipment_plan')(token, request);
                // });

                // describe('Secondary plan', function () {
                //     require('./secondary_shipment_plan')(token, request);
                // });

                // describe('Inbound', function () {
                //     require('./item_movement/inbound')(token, request);
                // });
                describe('Sorting', function () {
                    require('./item_movement/sorting-8')(token, request);
                });

                // describe('Outbound', function () {
                //     require('./item_movement/outbound')(token, request);
                // });

                // describe('Loading', function () {
                //     require('./item_movement/loading')(token, request);
                // });

                // describe('Reports', function () {
                //     require('./reports')(token, request);
                // });

                // describe('Dashboard', function () {
                //     require('./dashboard')(token, request);
                // });

                done();
            });
    });
});
