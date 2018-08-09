const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-001",
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
                    "destination_container": "GRC-008",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};