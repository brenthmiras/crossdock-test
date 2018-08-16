// 3rd party imports
const supertest = require('supertest');
const async     = require('async');
const chai      = require('chai');

// Local imports
const config    = require('../config');

// Imports initialization
const request   = supertest(config.BASE_URL);
const expect    = chai.expect;

// Declarations
let token;                  // Access token used for authenticating requests
let recommendations;        // Primary shipment recommendations
let customer_primary_id;    // The database id of primary customer

describe('Login user to get token', function () {
    it('should be successful', function (done) {
        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                email: 'admin@cdi.com',
                password: 'secret'
            })
            .end(function (err, result) {
                token = result.header['x-access-token'];
                done();
            });
    });
});

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

    it('should get all recommendations', function () {
        const rows = result.body.data.items;
        expect(rows.length).to.be.above(0);
    });
});

describe('POST /customer-primaries/:id/shipments', function () {
    it('should confirm all recommendations', function (done) {
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
                console.log('    ✓ Successfully confirmed shipment for',r.customer_primary_id);
                cb();
            });
        }
    });
});

describe('GET /customer-primaries/shipments', function () {
    let result;

    const dateObj = new Date();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const date = parseInt(('0' + dateObj.getDate()).slice(-2)) + 1;
    const year = dateObj.getFullYear();

    const dateString = [year, month, date].join('-');

    before('Fire http request', function (done) {
        request
        .get(`/customer-primaries/shipments?date=`+dateString)
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

    it('should get all confirmed primary shipments', function () {
        const rows = result.body.data.items;
        expect(rows.length).to.equal(recommendations.length);
    });
});
