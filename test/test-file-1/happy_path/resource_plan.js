const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');

module.exports = function (token, request) {
    
    describe('PUT /grid-plan/:rollcage_id', function () {
        it('it should get assign GRC-002 successfully', function (done) {
            
            request
                .put('/grid-plan/'+'GSRT-A01-08')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-002'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-008 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-03')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-008'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-006 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-04')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-006'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-005 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-005'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-007 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-007'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-004 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-07')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-004'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-001 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-06')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-001'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    
        it('it should get assign GRC-003 successfully', function (done) {
    
            request
                .put('/grid-plan/'+'GSRT-A01-05')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-003'
                })
                .expect(200, function (err, result) {
                    done();
                });
    
        });
    
    });



    // describe('POST /customer-secondaries/:id/shipments', function () {
    //     it('it should get confirm VLZ00189 successfully', function (done) {

    //         request
    //             .post('/customer-secondaries/VLZ00189/shipments')
    //             .set('x-access-token', token)
    //             .send([{
    //                 "truck_type": "4W SMALL",
    //                 "quantity": 1,
    //                 "required_delivery_date": "2018-08-10",
    //                 "category": "NON-FOOD",
    //                 "clusters": ["VLZ00189"]
    //             }])
    //             .expect(200, function (err, result) {
    //                 done();
    //             });

    //     });


    //     it('it should update customer priority for SCC-004195', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004195/priority')
    //             .set('x-access-token', token)
    //             .send([{
    //                 "customer_secondary_id": "SCC-004195",
    //                 "name_registered": "PUREGOLD PRICE CLUB VALENZUELA",
    //                 "ship_to_code": "STC-000000616",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 1,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             }])
    //             .expect(200, function (err, result) {
    //                 done();
    //             });

    //     });

    //     it('it should update customer priority for SCC-004113', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004113/priority')
    //             .set('x-access-token', token)
    //             .send([{
    //                 "customer_secondary_id": "SCC-004195",
    //                 "name_registered": "PUREGOLD PRICE CLUB VALENZUELA",
    //                 "ship_to_code": "STC-000000616",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 1,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             }])
    //             .expect(200, function (err, result) {
    //                 done();
    //             });

    //     });

    //     it('it should update customer priority for SCC-004453', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004453/priority')
    //             .set('x-access-token', token)
    //             .send({
    //                 "customer_secondary_id": "SCC-004453",
    //                 "name_registered": "SSMI VALENZUELA",
    //                 "ship_to_code": "STC-000000869",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 3,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             })
    //             .expect(200, function (err, result) {
    //                 done();
    //             });

    //     });

    //     it('it should finalize shipments for SCC-004113', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004113/priority')
    //             .set('x-access-token', token)
    //             .send({
    //                 "customer_secondary_id": "SCC-004113",
    //                 "name_registered": "PUREGOLD JR VALENZUELA",
    //                 "ship_to_code": "STC-000000534",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 1,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             })
    //             .expect(200, function (err, result) {
    //                 done();
    //             });

    //     });

    //     it('it should finalize shipments for SCC-004453', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004453/priority')
    //             .set('x-access-token', token)
    //             .send({
    //                 "customer_secondary_id": "SCC-004453",
    //                 "name_registered": "SSMI VALENZUELA",
    //                 "ship_to_code": "STC-000000869",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 2,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             })
    //             .expect(200, function (err, result) {
    //                 done();
    //             });
    //     });

    //     it('it should finalize shipments for SCC-004195', function (done) {
    //         request
    //             .put('/customer-secondaries/SCC-004195/priority')
    //             .set('x-access-token', token)
    //             .send({
    //                 "customer_secondary_id": "SCC-004195",
    //                 "name_registered": "PUREGOLD PRICE CLUB VALENZUELA",
    //                 "ship_to_code": "STC-000000616",
    //                 "acceptance_time_start": "06:00:00",
    //                 "acceptance_time_end": "23:59:00",
    //                 "delivery_days": "Monday - Saturday",
    //                 "area": "VALENZUELA",
    //                 "status": "CONFIRMED",
    //                 "priority": 3,
    //                 "shipment_secondary_id": "SS-ZEU-180810-1"
    //             })
    //             .expect(200, function (err, result) {
    //                 done();
    //             });
    //     });

    // });


};