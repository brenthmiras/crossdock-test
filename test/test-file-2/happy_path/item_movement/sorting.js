const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU010000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000001",
                    "destination_container": "GRC-015",
                    "quantity": 20
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
                    "source_container": "ZEU010000001",
                    "destination_container": "GRC-011",
                    "quantity": 85
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

        it('it should sort ZEU990000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000001",
                    "destination_container": "GRC-011",
                    "quantity": 40
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
                    "destination_container": "ZEU-C01-02",
                    "quantity": 20
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
                    "destination_container": "GRC-015",
                    "quantity": 20
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};