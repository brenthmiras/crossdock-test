const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        it('it should sort ZEU440000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU440000001",
                    "destination_container": "ZEU-A01-01",
                    "quantity": 119,
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
                    "destination_container": "GRC-001",
                    "quantity": 7,
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
                    "destination_container": "ZEU-A01-01",
                    "quantity": 30,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};