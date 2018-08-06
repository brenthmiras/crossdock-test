const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');

let token;

describe('POST /auth/login', function () {
    it('should be able to login', function (done) {
        // Pass
        this.timeout(20000);
        
        request(config.BASE_URL)
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
                done();
            })

    });
});

describe('Order management', function () {
    require( './order_management')(token);
});

describe('Resource plan', function () {
    require('./resource_plan')(token);
});

describe('Inbound', function () {
    require('./item_movement/inbound')(token);
});

describe('Putaway', function () {
    require('./item_movement/putaway')(token);
});

describe('Sorting', function () {
    require('./item_movement/sorting')(token);
});

describe('Outbound', function () {
    require('./item_movement/outbound')(token);
});

describe('Loading', function () {
    require('./item_movement/loading')(token);
});

describe('Reports', function () {
    require('./reports')(token);
});

describe('Dashboard', function () {
    require('./dashboard')(token);
});
