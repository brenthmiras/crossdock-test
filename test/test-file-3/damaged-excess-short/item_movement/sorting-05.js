const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

// test file 1

        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-030",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-003",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

// test file 2

        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-034",
                    "quantity": 3,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-011",
                    "quantity": 35,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-025",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

// test file 3 

        it('it should sort ZEU555000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU555000001",
                    "destination_container": "GRC-035",
                    "quantity": 50,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should sort ZEU555000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU555000001",
                    "destination_container": "GRC-024",
                    "quantity": 8,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

    });
};