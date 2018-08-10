const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        // FIrst test file
        it('it should sort ZEU900000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000001",
                    "destination_container": "ZEU-A02-01",
                    "quantity": 40
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
                    "quantity": 40
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });

        // Second file
        it('it should sort ZEU990000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000001",
                    "destination_container": "GRC-014",
                    "quantity": 40
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });

        it('it should sort ZEU990000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000001",
                    "destination_container": "ZEU-C01-02",
                    "quantity": 20
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });

        it('it should sort ZEU990000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000002",
                    "destination_container": "GRC-019",
                    "quantity": 50
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU990000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000003",
                    "destination_container": "GRC-019",
                    "quantity": 20
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });

        // Third test file
        it('it should sort ZEU999000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU999000001",
                    "destination_container": "GRC-037",
                    "quantity": 5
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });

        it('it should sort ZEU999000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU999000001",
                    "destination_container": "GRC-024",
                    "quantity": 5
                })
                .expect(200, function (err, result) {                    
                    done();
                });
        });
    });
};