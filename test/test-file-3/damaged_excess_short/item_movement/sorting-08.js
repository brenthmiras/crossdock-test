const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU800000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU800000001",
                    "destination_container": "GRC-027",
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
                    "destination_container": "GRC-039",
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
                    "destination_container": "GRC-005",
                    "quantity": 8,
                    "sku": "615999",
                    "ship_to_code": "STC-000000616"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        //from test-file-2
        it('it should sort ZEU880000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU880000001",
                    "destination_container": "ZEU-C01-01",
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
                    "destination_container": "GRC-018",
                    "quantity": 1,
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
                    "destination_container": "GRC-014",
                    "quantity": 3,
                    "sku": "21003055",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
       
       
        it('it should sort ZEU888000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU888000001",
                    "destination_container": "GRC-002",
                    "quantity": 1,
                    "sku": "JF000896"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        
    });
};