const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU770000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU770000001",
                    "destination_container": "GRC-007",
                    "quantity": 2
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });
        
        it('it should sort ZEU770000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU770000001",
                    "destination_container": "GRC-006",
                    "quantity": 1
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU770000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU770000001",
                    "destination_container": "GRC-001",
                    "quantity": 9
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });
        
    });
};