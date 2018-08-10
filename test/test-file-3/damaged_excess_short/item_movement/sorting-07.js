const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        //08-08-1
        //616704
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
                    "quantity": 38
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        //08-09-1
        //20046526
        it('it should sort ZEU770000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU770000001",
                    "destination_container": "GRC-025",
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
                    "destination_container": "GRC-016",
                    "quantity": 9
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
                    "destination_container": "GRC-023",
                    "quantity": 2
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });
       
        //08-09-2
        //JF000913
        it('it should sort ZEU777000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU777000001",
                    "destination_container": "GRC-017",
                    "quantity": 7
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

    });
};