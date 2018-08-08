const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


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

    });
};