const request = require('supertest');

let token;

describe('POST /auth/login', function () {
    it('should be able to login', function () {
        // Pass
        request('13.250.63.204:8001')
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                "email": "admin@cdi.com",
                "password": "secret"
            }).end(function (errr, result) {

                token = result.header['x-access-token'];

            });
    });
    chai.expect({}).to.not.have.property("token");
});


describe('POST /prealert', function () {
    it('should be successful', function () {
        // Pass
    });
});


describe('GET /bookings?status=prealert', function () {
    it('should be successful', function () {
        // Pass
    });
});
