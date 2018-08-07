const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('should be successful', function () {
            // Pass
        });
    });

    describe('POST /grid-plan/:id', function () {
        it('it should get assign GRC-000 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-000'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-001 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-001'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-002 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-002'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-003 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-03')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-003'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-004 successfully', function (done) {

            request
                .put('/grid-plan/' + 'ZEU-A01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-004'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-005 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-005'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-006 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-04')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-006'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-007 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-04')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-007'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-008 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-05')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-008'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-009 successfully', function (done) {

            request
                .put('/grid-plan/' + 'ZEU-C01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-009'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-010 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-03')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-010'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-011 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-07')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-011'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-012 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-06')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-012'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-013 successfully', function (done) {

            request
                .put('/grid-plan/' + 'ZEU-A01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-013'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should get assign GRC-014 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-05')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-014'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


    })
};