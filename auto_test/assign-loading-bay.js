const config = require('../config');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const async = require('async');

let token;

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

describe('PUT /shipment-secondary/:id', function () {

    let shipments;
    let docks;

    before('Get all secondary shipments', function (done) {
        const dateObj   = new Date();
        const month     = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const date      = ('0' + dateObj.getDate()).slice(-2);
        const year      = dateObj.getFullYear();

        const dateString = [year, month, date].join('-');

        request
            .get(`/shipment-secondaries?date=${dateString}`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                shipments = result.body.data.items;
                
                done();
            });
    });

    before('Get all docks', function (done) {
        request
            .get(`/grids?type=LOADING`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                docks = result.body.data.items;
                
                done();
            });
    });

    it('it should assign all shipments to loading bay', function (done) {
        // NOTE: This assigns all shipments to the first door
        const door_one = docks[0];

        const data = shipments.map( (s, index) => {
            return {
                shipment_id:    s.id,
                door_id:        door_one.id,
                priority:       index + 1
            };
        });

        async.eachSeries(data, assign_loading_bay, done);

        function assign_loading_bay(data, cb){
            const shipment_id = data.shipment_id;

            request
            .put(`/shipment-secondary/${shipment_id}`)
            .set('x-access-token', token)
            .send(data)
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                cb();
            });
        }
    });
});