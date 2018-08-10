const config = require('../../../config');


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
        .end(function(err, result){
            token = result.header['x-access-token'];

            describe('Inbound', function () {
                require('./item_movement/inbound-09')(token, request);
            });

            describe('Putaway', function () {
                require('./item_movement/putaway-09')(token, request);
            });

            describe('Sorting', function () {
                require('./item_movement/sorting-09')(token, request);
            });

            done();
        });
    })
});
