const config = require('../config');
const request = require('supertest')(config.BASE_URL);

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
                console.log(token);
                done();
        });
    });
});

describe('SIMULATE DATE MINUS 1: POST /test/minus_one', function () {
    it('should be succesful', function (done) {
        request
            .post('/test/minus_one')
            .type('json')
            .set('x-access-token', token)
            .expect(200, function (err, result) {
                if(err) throw err;
                done();
        });
    });
});