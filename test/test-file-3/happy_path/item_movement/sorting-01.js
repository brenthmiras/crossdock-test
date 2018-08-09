const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU110000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU110000001",
                    "destination_container": "GRC-007",
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
                    "destination_container": "GRC-006",
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
                    "destination_container": "GRC-004",
                    "quantity": 10
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};