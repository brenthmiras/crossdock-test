const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU9000000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000001",
                    "destination_container": "ZEU-A02-01",
                    "quantity": 40,
                    "sku": "302091",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {                
                    done();
                });

        });


        it('it should sort ZEU900000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000002",
                    "destination_container": "ZEU-A01-02",
                    "quantity": 40,
                    "sku": "302091",
                    "ship_to_code": "STC-000000534"
                })
                .expect(200, function (err, result) {  
                    done();
                });

        });

        // it('it should sort ZEU000000000 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000000",
        //             "destination_container": "GRC-011",
        //             "quantity": 1,
        //             "sku": "67106205",
        //             "ship_to_code": "STC-000000616"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000001 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000001",
        //             "destination_container": "GRC-014",
        //             "quantity": 1,
        //             "sku": "21009478",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000002 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000002",
        //             "destination_container": "GRC-006",
        //             "quantity": 5,
        //             "sku": "67106203",
        //             "ship_to_code": "STC-000000531"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000002 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000002",
        //             "destination_container": "GRC-012",
        //             "quantity": 3,
        //             "sku": "67106203",
        //             "ship_to_code": "STC-000000869"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000002 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000002",
        //             "destination_container": "GRC-010",
        //             "quantity": 6,
        //             "sku": "67106203",
        //             "ship_to_code": "STC-000000028"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000003 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000003",
        //             "destination_container": "GRC-005",
        //             "quantity": 7,
        //             "sku": "20046527",
        //             "ship_to_code": "STC-000000472"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000003 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000003",
        //             "destination_container": "ZEU-A01-02",
        //             "quantity": 119,
        //             "sku": "20046527",
        //             "ship_to_code": "STC-000000616"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000004 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000004",
        //             "destination_container": "GRC-012",
        //             "quantity": 1,
        //             "sku": "20046527",
        //             "ship_to_code": "STC-000000869"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000004 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000004",
        //             "destination_container": "ZEU-A01-02",
        //             "quantity": 31,
        //             "sku": "20046527",
        //             "ship_to_code": "STC-000000616"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000005 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000005",
        //             "destination_container": "GRC-003",
        //             "quantity": 40,
        //             "sku": "JF000998",
        //             "ship_to_code": "STC-000000471"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000005 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000005",
        //             "destination_container": "ZEU-C01-01",
        //             "quantity": 16,
        //             "sku": "JF000998",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000006 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000006",
        //             "destination_container": "ZEU-C01-01",
        //             "quantity": 56,
        //             "sku": "JF000998",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000007 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000007",
        //             "destination_container": "ZEU-C01-01",
        //             "quantity": 28,
        //             "sku": "JF000998",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000008 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000008",
        //             "destination_container": "GRC-008",
        //             "quantity": 5,
        //             "sku": "JF001023",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000008 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000008",
        //             "destination_container": "GRC-002",
        //             "quantity": 85,
        //             "sku": "JF001023",
        //             "ship_to_code": "STC-000000471"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000009 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000009",
        //             "destination_container": "GRC-008",
        //             "quantity": 15,
        //             "sku": "JF001023",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000010 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000010",
        //             "destination_container": "GRC-011",
        //             "quantity": 10,
        //             "sku": "20062058",
        //             "ship_to_code": "STC-000000616"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000010 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000010",
        //             "destination_container": "GRC-012",
        //             "quantity": 3,
        //             "sku": "20062058",
        //             "ship_to_code": "STC-000000869"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000010 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000010",
        //             "destination_container": "GRC-000",
        //             "quantity": 35,
        //             "sku": "20062058",
        //             "ship_to_code": "STC-000000471"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000011 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000011",
        //             "destination_container": "GRC-006",
        //             "quantity": 1,
        //             "sku": "21066581",
        //             "ship_to_code": "STC-000000531"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000011 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000011",
        //             "destination_container": "GRC-010",
        //             "quantity": 5,
        //             "sku": "21066581",
        //             "ship_to_code": "STC-000000028"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000012 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000012",
        //             "destination_container": "GRC-011",
        //             "quantity": 1,
        //             "sku": "20046526",
        //             "ship_to_code": "STC-000000616"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000012 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000012",
        //             "destination_container": "GRC-005",
        //             "quantity": 9,
        //             "sku": "20046526",
        //             "ship_to_code": "STC-000000472"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000012 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000012",
        //             "destination_container": "null",
        //             "quantity": 2,
        //             "sku": "20046526",
        //             "ship_to_code": "STC-000000534"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000013 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000013",
        //             "destination_container": "ZEU-A01-01",
        //             "quantity": 72,
        //             "sku": "21003055",
        //             "ship_to_code": "STC-000000471"
        //         })
        //         .expect(200, function (err, result) {
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000014 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000014",
        //             "destination_container": "GRC-014",
        //             "quantity": 4,
        //             "sku": "21003055",
        //             "ship_to_code": "STC-000000530"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });


        // it('it should sort ZEU000000014 successfully', function (done) {

        //     request
        //         .post('/item/sort')
        //         .set('x-access-token', token)
        //         .send({
        //             "source_container": "ZEU000000014",
        //             "destination_container": "ZEU-A01-01",
        //             "quantity": 3,
        //             "sku": "21003055",
        //             "ship_to_code": "STC-000000471"
        //         })
        //         .expect(200, function (err, result) {
                    
        //             done();
        //         });

        // });
    });
};