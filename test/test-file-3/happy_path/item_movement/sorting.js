const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /customer-primaries/:id/shipments', function () {

        // Inbound doc 1
        it('it should sort ZEU010000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000001",
                    "destination_container": "GRC-028",
                    "quantity": 2
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU010000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000001",
                    "destination_container": "GRC-033",
                    "quantity": 1
                })
                .expect(200, function (err, result) {
                    done();
                });
        });


        // Inbound doc 2

         it('it should sort ZEU010000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000001",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU010000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000002",
                    "destination_container": "ZEU-A05-01",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

         it('it should sort ZEU010000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000003",
                    "destination_container": "ZEU-A03-01",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

          it('it should sort ZEU010000004 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000004",
                    "destination_container": "GRC-039",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        // Inbound doc 3

         it('it should sort ZEU011000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU011000001",
                    "destination_container": "GRC-014",
                    "quantity": 85
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

         it('it should sort ZEU011000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU011000001",
                    "destination_container": "GRC-019",
                    "quantity": 20
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};