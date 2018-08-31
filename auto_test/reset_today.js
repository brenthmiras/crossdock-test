const config = require('../config');
const async = require('async');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');

let token;

describe('Login user to get token', function () {
    it('should be successful', function (done) {
        this.timeout(20000);
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

describe('RESET TODAY\'s data', function () {

    it('should reset all data for today', function(done){
        request
        .post('/test/reset_today')
        .type('json')
        .set('x-access-token', token)
        .expect(200, function (err, result) {
            if (err) {
                throw err;
            }
            done();
        });
    });
});




