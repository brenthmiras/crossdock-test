const config = require('../config');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');

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


    
describe('PUT /grid-plan/:rollcage_id', function () {

    it('should be able to reset data', function (done) {
        // Pass
        request
            .get('/reset-item-movements')
            .set('x-access-token', token)
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });
    });

    
    it('it should assign GRC-002 successfully', function (done) {
        
        request
            .put('/grid-plan/'+'GSRT-A01-08')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-002'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-008 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-03')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-008'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-006 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-04')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-006'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-005 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-02')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-005'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-007 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-01')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-007'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-004 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-07')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-004'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-001 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-06')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-001'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });


    it('it should assign GRC-003 successfully', function (done) {

        request
            .put('/grid-plan/'+'GSRT-A01-05')
            .set('x-access-token', token)
            .send({
                'rollcage': 'GRC-003'
            })
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            });

    });

});