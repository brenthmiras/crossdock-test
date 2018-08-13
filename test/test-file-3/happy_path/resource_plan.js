const request = require('supertest');
const chai = require('chai');
const config = require('../../../config');

module.exports = function (token, request) {

    describe('POST /grid-plan/:id', function () {

        it('should be able to reset item movement', function (done) {
            // Pass
            request
                .get('/reset-item-movements')
                .set('x-access-token', token)
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should get assign GRC-000 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-10')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-000'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-001 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-12')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-001'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-002 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-08')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-002'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-003 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-11')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-003'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-005 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-04')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-005'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-006 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-05')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-006'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-011 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-09')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-011'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-012 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-09')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-012'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-013 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-10')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-013'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-014 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-11')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-014'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-016 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-016'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-017 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-017'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-018 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-14')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-018'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-019 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-15')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-019'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-021 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-12')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-021'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-022 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-13')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-022'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-023 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-15')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-023'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-024 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-05')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-024'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-025 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-14')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-025'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-027 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-03')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-027'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-028 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-01')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-028'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-030 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-02')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-030'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-032 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-04')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-032'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-033 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-03')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-033'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-034 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-13')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-034'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-035 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-07')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-035'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-036 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-08')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-036'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-037 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-B01-06')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-037'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-038 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-07')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-038'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });


        it('it should get assign GRC-039 successfully', function (done) {

            request
                .put('/grid-plan/' + 'GSRT-A01-06')
                .set('x-access-token', token)
                .send({
                    'rollcage': 'GRC-039'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
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