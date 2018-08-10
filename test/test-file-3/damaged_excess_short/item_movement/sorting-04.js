const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU400000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000001",
                    "destination_container": "GRC-006",
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
                    "destination_container": "GRC-036",
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
                    "destination_container": "GRC-038",
                    "quantity": 10,
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
                    "destination_container": "GRC-036",
                    "quantity": 30,
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
                    "destination_container": "GRC-038",
                    "quantity": 21,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU440000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU440000001",
                    "destination_container": "GRC-016",
                    "quantity": 7,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU440000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU440000001",
                    "destination_container": "ZEU-A06-01",
                    "quantity": 119,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU440000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU440000002",
                    "destination_container": "GRC-025",
                    "quantity": 28,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU444000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU444000001",
                    "destination_container": "GRC-035",
                    "quantity": 21,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU444000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU444000001",
                    "destination_container": "GRC-017",
                    "quantity": 2,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};