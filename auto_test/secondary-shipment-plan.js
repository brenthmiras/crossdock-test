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


//transfer one stc
// describe('PUT /shipment-secondary/recommendation/:id/transfer', function () {

//     it('it should transfer STC-000000967 SVI NORTH EDSA from QZC00198 to TGC00186', function (done) {
//         request
//             .put('/shipment-secondary/recommendation/8869c7d2-9f66-11e8-a6cf-d46d6d0792d9/transfer')
//             .set('x-access-token', token)
//             .send({
//                 'customer_secondary_id': 'SCC-004528'
//             })
//             .expect(200, function (err, result) {
//                 if(err){
//                     console.log(result.body);
//                     throw err;
//                 }
//                 done();
//             });
//     });

// });

describe('POST /customer-secondaries/:id/shipments', function () {

    let recommendations;

    before('Get all recommendations to be confirmed', function (done) {

        const dateObj   = new Date();
        const month     = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const date      = ('0' + dateObj.getDate()).slice(-2);
        const year      = dateObj.getFullYear();

        const dateString = [year, month, date].join('-');

        request
            .get(`/shipment-secondary/recommendation?date=${dateString}`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                recommendations = result.body.data.items;
                
                done();
            });
    });

    it('it should confirm all shipments', function (done) {
        
        async.each(recommendations, confirm_recommendation, done);

        function confirm_recommendation(r, cb){

            if (r.ship_to_codes.length == 0) return cb();

            const {cluster_name} = r;
            
            const data = [{
                truck_type:             r.truck_type,
                category:               r.category,
                clusters:               [r.cluster_name],
                quantity:               1,
                required_delivery_date: r.required_delivery_date
            }];

            request
            .post(`/customer-secondaries/${cluster_name}/shipments`)
            .set('x-access-token', token)
            .send(data)
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                console.log('Shipment confirmed for', cluster_name);

                cb();
            
            });
        }

    });

});

describe('PUT /customer-secondaries/:id/priority', function () {

    let recommendations;

    before('Get all customers to confirm priority', function (done) {

        const dateObj   = new Date();
        const month     = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const date      = ('0' + dateObj.getDate()).slice(-2);
        const year      = dateObj.getFullYear();

        const dateString = [year, month, date].join('-');

        request
            .get(`/shipment-secondary/recommendation?date=${dateString}`)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                recommendations = result.body.data.items;
                
                done();
            });
    });

    it('it should confirm all loading priorities', function (done) {
        const priorities = [];

        // Set priorities for all customers
        recommendations.forEach( (r) => {
            r.ship_to_codes.forEach( (stc, index) => {
                const priority_data = {
                    priority: index + 1,
                    customer_secondary_id: stc.customer_secondary_id,
                    shipment_secondary_id: r.secondary_shipment_number
                };  

                priorities.push(priority_data);
            });
        });

        async.each(priorities, confirm_priority, done);

        function confirm_priority(data, cb){
            const {customer_secondary_id} = data;
            const {priority, shipment_secondary_id} = data;

            request
            .put(`/customer-secondaries/${customer_secondary_id}/priority`)
            .set('x-access-token', token)
            .send({
                priority,
                shipment_secondary_id
            })
            .expect(200, function (err, result) {
                if(err){
                    console.log(result.body);
                    throw err;
                }

                console.log(customer_secondary_id,'Loading priority confirmed');                

                cb();
            });
        }

    });

});