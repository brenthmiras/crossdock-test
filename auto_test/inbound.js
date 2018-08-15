const chai = require('chai');
const config = require('../config');
const request = require('supertest')(config.BASE_URL);
const async = require('async');

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



describe('inbound', function () {
    const items = [];
    const excess_index = [];           
    const excess_quantity = [];  
    const damaged_index = [];
    const damaged_quantity = [];
    const short_index = [];
    const short_quantity = [];
    let counter = 1;
    before('get all items to be inbound', function (done) {
        request
        .get('/inbound')
        .set('x-access-token', token)
        .send()
        .expect(200, function (err, result) {

            result.body.data.items.forEach((item, index) => {

                if(item.quantity > item.pallet_max_case) {

                    while(item.quantity >= item.pallet_max_case) {
                        items.push({
                            'source_container_location': item.inbound_document_number,
                            'source_container': 'MAX999',
                            'destination_container': 'ZEU0000000'+counter,
                            'material_id': item.material_id,
                            'quantity': (item.quantity % item.pallet_max_case) || item.pallet_max_case
                        });
                        item.quantity = item.quantity - ((item.quantity % item.pallet_max_case) || item.pallet_max_case);
                        counter++;
                    }
                    
                } else {

                    items.push({
                        'source_container_location': item.inbound_document_number,
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU0000000'+counter,
                        'material_id': item.material_id,
                        'quantity': item.quantity
                    });
                    counter++;
                }
            });

            if(excess_index.length) {
                excess_index.forEach((item, index) => {
                let res = items[item];
                    items.push({
                        'source_container_location': res.source_container_location + "-EXCESS",
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU0000000'+counter,
                        'material_id': res.material_id,
                        'quantity': excess_quantity[index]
                    });
                    counter++;
                });
            }

            if(damaged_index.length) {
                damaged_index.forEach((item, index) => {
                    items[item].quantity = items[item].quantity - damaged_quantity[index];
                    let res = items[item];
                        items.push({
                            'source_container_location': res.source_container_location + "-DAMAGED",
                            'source_container': 'MAX999',
                            'destination_container': 'ZEU0000000'+counter,
                            'material_id': res.material_id,
                            'quantity': damaged_quantity[index]
                        });
                    counter++;
                });
            }

            if(short_index.length) {
                short_index.forEach((item, index) => {
                    items[item].quantity = items[item].quantity - short_quantity[index];
                    let res = items[item];
                    items[item] = res; 
                    counter++;
                });
            }
            done();
        });
    });


    it('should receive all inbound', function (done) {
        async.eachSeries(items, inbound, done);
        function inbound(i, cb) {
            request
            .post('/item/receive')
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
