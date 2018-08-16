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
                email: 'staging@cdi.com',
                password: 'secret'
            })

            .end(function (err, result) {
                token = result.header['x-access-token'];
                done();
            });
    });

});

describe('PUTAWAY: POST /item/putaway', function () {

    let items;

    const dateObj = new Date();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const date = ('0' + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const dateString = [year, month, date].join('-');

    before('Get all items to be staged', function (done) {
        request
            .get(`/inbound?date=${dateString}`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items = [];
                result.body.data.items.forEach((item) => {
                    item.pallets.forEach(pallet => {
                        items.push(pallet);
                    });
                });
                done();
            });
    });

    it('should putaway all received items', function (done) {
        console.log(items.length);
        async.each(items, putaway, done);
        function putaway(o, cb) {
            request
            .get('/materials/barcode/' + o.destination_container)
            .set('x-access-token', token)
            .expect(200, function (err, result) {
                grid = result.body.data.items[0].staging_subgrid;
                request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': o.destination_container,
                    'destination_container_location': grid
                })
                .expect(200, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    console.log('    ✓ Successfully staged', o.destination_container+' to', grid);
                        cb();
                    });
        
                });
        }
    });

});




