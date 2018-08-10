const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU100000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU100000001",
                    "destination_container": "GRC-002",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU100000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU100000001",
                   "destination_container": "GRC-008",
                   "quantity": 5
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-006",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-007",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-004",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU300000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU300000001",
                   "destination_container": "GRC-001",
                   "quantity": 10
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU300000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU300000001",
                   "destination_container": "GRC-008",
                   "quantity": 10
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU400000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU400000001",
                   "destination_container": "GRC-003",
                   "quantity": 35,
                   "sku": "616701",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU400000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU400000001",
                   "destination_container": "GRC-007",
                   "quantity": 5,
                   "sku": "616701",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });
        
        it('it should sort ZEU400000002 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU400000002",
                   "destination_container": "GRC-007",
                   "quantity": 30,
                   "sku": "616701",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU400000002 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU400000002",
                   "destination_container": "GRC-006",
                   "quantity": 10,
                   "sku": "616701",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU400000003 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU400000003",
                   "destination_container": "GRC-006",
                   "quantity": 25,
                   "sku": "616701",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-001",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-008",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU600000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU600000001",
                   "destination_container": "ZEU-A05-02",
                   "quantity": 40,
                   // "sku": "67106205",
                   // "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU600000002 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU600000002",
                   "destination_container": "ZEU-A01-01",
                   "quantity": 40,
                   // "sku": "300796",
                   // "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU700000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU700000001",
                   "destination_container": "ZEU-A04-01",
                   "quantity": 40
                   // "sku": "67106205",
                   // "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU700000002 successfully', function (done) {
           request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU700000002",
                   "destination_container": "ZEU-A02-02",
                   "quantity": 40
                   // "sku": "67106205",
                   // "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU800000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU800000001",
                   "destination_container": "GRC-005",
                   "quantity": 8,
                   "sku": "615999",
                   "ship_to_code": "STC-000000531"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU800000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU800000001",
                   "destination_container": "GRC-004",
                   "quantity": 8,
                   "sku": "615999",
                   "ship_to_code": "STC-000000534"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU800000001 successfully', function (done) {
            request
               .post('/item/sort')
               .set('x-access-token', token)
               .send({
                   "source_container": "ZEU800000001",
                   "destination_container": "GRC-002",
                   "quantity": 8,
                   "sku": "615999",
                   "ship_to_code": "STC-000000616"
               })
               .expect(200, function (err, result) {
                   
                   done();
               });
        });

        it('it should sort ZEU900000001 successfully', function (done) {
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
    });
};