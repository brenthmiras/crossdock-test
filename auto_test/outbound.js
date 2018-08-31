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
                email: 'outbound@cdi.com',
                password: 'secret'
            })

            .end(function (err, result) {
                token = result.header['x-access-token'];
                done();
            });
    });

});

describe('OUTBOUND: POST /item/transport', function () {

    let items;

    const dateObj = new Date();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const date = ('0' + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const dateString = [year, month, date].join('-');

    before('Get all items to be transported', function (done) {
        request
            .get(`/outbound/list?date=${dateString}`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items = result.body.data.items;
                done();
            });
    });

    it('should transport all sorted items', function (done) {
        
        async.eachSeries(items, transport, done);

        function transport (item, cb) {
            
            let container = item.rollcage_id || item.grid_id;
            
            request
            .post(`/item/transport`)
            .set('x-access-token', token)
            .send({
                "shipment_id": item.id,
                "grid_id": item.grid_id,
                "customer_secondary_id": item.customer_secondary_id,
                "source_container": container,
                "destination_container":  container,
                "destination_container_location": item.door_id
            })
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('    ✓ Successfully transported', container +' to ', item.door_id);
                cb();
            });
        }
    });

});




