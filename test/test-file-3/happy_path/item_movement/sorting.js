const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU100000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU100000001",
                    "destination_container": "GRC-003",
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
                    "destination_container": "GRC-027",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU110000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU110000001",
                    "destination_container": "GRC-023",
                    "quantity": 7
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        it('it should sort ZEU110000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU110000001",
                    "destination_container": "GRC-025",
                    "quantity": 1
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        it('it should sort ZEU110000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU110000001",
                    "destination_container": "GRC-021",
                    "quantity": 10
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU111000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU111000001",
                    "destination_container": "GRC-028",
                    "quantity": 8
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU111000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU111000001",
                    "destination_container": "GRC-033",
                    "quantity": 1
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};