const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-005",
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
                    "destination_container": "GRC-002",
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
                    "destination_container": "GRC-006",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};