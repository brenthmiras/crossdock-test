const config = require('../../../config');


const request = require('supertest')(config.BASE_URL);
const chai = require('chai');

let token;

describe('Login user to get token', function () {
    it('should be successful', function(done){
        this.timeout(20000);
        request
        .post('/auth/login')
        .type('json')
        .set('Content-Type', 'application/json')
        .send({
            email: 'admin@cdi.com',
            password: 'secret'
        })
        .end(function(err, result){
            token = result.header['x-access-token'];
            // describe('Inbound', function () {
            //     require('./item_movement/inbound-01')(token, request);
            // });
    
            // describe('Putaway', function () {
            //     require('./item_movement/putaway-01')(token, request);
            // });

            describe('Sorting', function () {
                require('./item_movement/sorting-01')(token, request);
            });
            done();
        });
    })
});

// describe('POST /test/reset', function () {
//     // it('should be able to reset data', function (done) {
//     //     // Pass
//     //     this.timeout(20000);
//     //     request
//     //     .post('/test/reset')
//     //     .type('json')
//     //     .set('Content-Type', 'application/json')
//     //     .set('x-access-token', token)
//     //     .send()
//     //     .expect(200, function (err, result) {

//     //         describe('Order management', function () {
//     //             require('./order_management')(token, request);
//     //         });

//     //         describe('Primary shipment plan', function () {
//     //             require('./primary_shipment_plan')(token, request);
//     //         });

//     //         describe('Secondary plan', function () {
//     //             require('./secondary_shipment_plan')(token, request);
//     //         });

//     //         describe('Resource plan', function () {
//     //             require('./resource_plan')(token, request);
//     //         });

//             describe('Inbound', function () {
//                 require('./item_movement/inbound')(token, request);
//             });

//             describe('Putaway', function () {
//                 require('./item_movement/putaway')(token, request);
//             });
//             // describe('Sorting', function () {
//             //     require('./item_movement/sorting')(token, request);
//             // });

//             // describe('Outbound', function () {
//             //     require('./item_movement/outbound')(token, request);
//             // });

//             // describe('Loading', function () {
//             //     require('./item_movement/loading')(token, request);
//             // });

//             // describe('Reports', function () {
//             //     require('./reports')(token, request);
//             // });

//             // describe('Dashboard', function () {
//             //     require('./dashboard')(token, request);
//             // });

//             done();
//         // });
//     // });
// });
