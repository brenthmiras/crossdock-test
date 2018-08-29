const chai = require('chai');
const config = require('../config');
const request = require('supertest')(config.BASE_URL);
const async = require('async');
const $ = require('./');

describe('Login user to get token', function () {
    it('should be successful', function (done) {
        console.log($)    
    });
});
