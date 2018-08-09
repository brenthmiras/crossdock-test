const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-006",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });


        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-007",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-004",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};