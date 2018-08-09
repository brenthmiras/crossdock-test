const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU880000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU880000001",
                    "destination_container": "GSRT-B01-03",
                    "quantity": 72,
                    "sku": "21003055",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU880000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU880000002",
                    "destination_container": "ZEU-C01-01",
                    "quantity": 3,
                    "sku": "21003055",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        it('it should sort ZEU880000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU880000002",
                    "destination_container": "GRC-015",
                    "quantity": 4,
                    "sku": "21003055",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
       

    });
};