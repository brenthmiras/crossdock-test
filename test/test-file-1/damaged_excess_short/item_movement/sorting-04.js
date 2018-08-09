const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


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
    });
};