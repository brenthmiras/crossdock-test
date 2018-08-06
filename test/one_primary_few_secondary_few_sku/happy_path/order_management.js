const request = require('supertest');
const chai = require('chai');

let token;

describe('POST /auth/login', function () {
    it('should be able to login', function (done) {
        // Pass
        
        request('13.250.63.204:8001')
            .post('/auth/login')
            .type('json')
            .timeout(10000)
            .set('Content-Type', 'application/json')
            .send({
                "email": "admin@cdi.com",
                "password": "secret"
            })
            .expect(200, function (err, result) {

                chai.expect(result.header).to.have.property('x-access-token');

                token = result.header['x-access-token'];
                console.log(token);
                done();
            })

    });
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
