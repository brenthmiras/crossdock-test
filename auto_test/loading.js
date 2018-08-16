const config = require('../config');
const async = require('async');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const moment = require('moment');

let token;

describe('Login user to get token', function () {
    it('should be successful', function (done) {
        this.timeout(20000);
        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                email: 'inbound@cdi.com',
                password: 'secret'
            })
            .end(function (err, result) {
                token = result.header['x-access-token'];
                console.log(token);
                done();
        });
    });
});


describe('loading', function () {
    const items = [];

    let today = moment().format('YYYY-MM-DD');
    before('get all items to be load', function (done) {
        request
        .get(`/loading?date=${today}`)
        .set('x-access-token', token)
        .send()
        .expect(200, function (err, result) {
            if(err) {
                console.log(res.body);
                throw err;
            }
            result.body.data.items.forEach(item => {
                items.push({
                    'quantity' : item.pallet_quantity,
                    'material_id': item.material_id,
                    'sorted_quantity': item.sorted_quantity,
                    'source_container' : get_source_container(item),
                    'destination_container': item.shipment_number,
                    'destination_container_location': "MAX999",
                    'source_container_location' : item.destination_container_location
                });
            });
            done();
        });
    });

    function get_source_container(item){
        if(item.fullpallet == 1){
            if(item.door_id == item.destination_container_location){
                return item.pallet;
            }
            else{
                return item.subgrid;
            }
        }
        else{
            return item.rollcage;
        }    
    }

    it('should load all items', function (done) {
        async.eachSeries(items, inbound, done);

        function inbound(i, cb) {
            request
            .post('/item/load')
            .type('json')
            .set('x-access-token', token)
            .set('Content-Type', 'application/json')
            .send(i)
            .expect(200, function (err, result) {
                if(err) { 
                    console.log(result.body); 
                    throw err;
                };
                console.log('successfully received:', i.destination_container);
                cb();
            });
        }
    });
});
