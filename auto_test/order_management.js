// 3rd party imports
const readline  = require('readline-sync');
const supertest = require('supertest');
const async     = require('async');
const chai      = require('chai');

// Local imports
const prealert_selector = require('../lib/prealert-selector');
const config            = require('../config');

// Imports initialization
const request   = supertest(config.BASE_URL);
const expect    = chai.expect;

// Declarations
let token;                  // Access token used for authenticating requests

// The original file path
const file_path = prealert_selector.select();

// The file path of the new csv with adjusted rdd
const new_path = prealert_selector.change_rdd(file_path);

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

describe('POST /prealerts', function () {
    this.timeout(5000);
    it('should be successful', function (done) {
        request
        .post('/prealerts')
        .set('Content-Type', 'multipart/form-data')
        .set('x-access-token', token)
        .field('override', 'true')
        .attach('file', new_path)
        .end(function(err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
});

describe('GET /bookings?status=prealert', function () {
    let result;

    before('Fire http request', function (done) {
        request
        .get('/bookings?status=prealert')
        .set('Content-Type', 'multipart/form-data')
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

    it('should contain the prealert we uploaded', function () {
        const rows = result.body.data.items;
        expect(rows.length).to.equal(1);
    });
});

describe('GET /last_cutoff', function () {
    let result;

    before('Fire http request', function (done) {
        request
        .get('/last_cutoff')
        .set('Content-Type', 'multipart/form-data')
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

    it('should have not been done', function () {
        const cutoff_done = result.body.data.cutoff_today;
        expect(cutoff_done).to.equal(0)
    });
});

describe('POST /test/prealert-cutoff', function () {
    it('should be successful', function (done) {
        request
        .post('/test/prealert-cutoff')
        .set('Content-Type', 'multipart/form-data')
        .set('x-access-token', token)
        .send()
        .end(function(err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
});
