// 3rd party imports
const readline  = require('readline-sync');
const supertest = require('supertest');
const async     = require('async');
const chai      = require('chai');

// Local imports
const prealert = require('../lib/prealert');
const config   = require('../config');

// Imports initialization
const request   = supertest(config.BASE_URL);
const expect    = chai.expect;

// Declarations
let token;                  // Access token used for authenticating requests

// The original file path
const file_paths = prealert.select();

// The file paths of the new csv with adjusted rdd
const new_paths = file_paths.map( path => prealert.change_rdd(path) );

// The booking ids of uploaded prealerts
const path_booking_map = new_paths.map( (path) => {
    return {
        path,
        booking_id: ''
    };
});

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

describe('UPLOAD PREALERT: POST /prealerts', function () {
    it('should upload all selected files', function (done) {
        async.each(new_paths, upload_prealert, done);

        function upload_prealert (path, cb) {
            request
                .post('/prealerts')
                .set('Content-Type', 'multipart/form-data')
                .set('x-access-token', token)
                .field('override', 'true')
                .attach('file', path)
                .end(function(err, res) {
                    expect(res.status).to.equal(200);

                    const booking_id = res.body.data.items[0].booking_id;

                    const path_to_update = path_booking_map.find( (item) => {
                        return item.path == path;
                    });

                    path_to_update.booking_id = booking_id;

                    cb();
                });
        }
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

    it('should contain the prealert(s) we uploaded', function () {
        const rows = result.body.data.items;
        expect(rows.length).to.equal(file_paths.length);
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
        expect(cutoff_done).to.equal(0);
    });
});

describe('SIMULATE PREALERT CUTOFF: POST /test/prealert-cutoff', function () {
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

describe('UPLOAD POST ALERT: POST /bookings/:id/postalerts', function () {

    before('Create postalert files', function () {
        path_booking_map.forEach( (item) => {
            item.postalert_filepath = prealert.create_postalert(item);
        });
    });

    it('should upload all selected files', function (done) {
        async.each(path_booking_map, upload_postalert, done);

        function upload_postalert (item, cb) {
            request
                .post(`/bookings/${item.booking_id}/postalerts`)
                .set('Content-Type', 'multipart/form-data')
                .set('x-access-token', token)
                .field('override', 'true')
                .attach('file', item.postalert_filepath)
                .end(function(err, res) {
                    expect(res.status).to.equal(200);
                    cb();
                });
        }
    });
});