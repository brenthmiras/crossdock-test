const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU220000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU220000001",
                    "destination_container": "GRC-015",
                    "quantity": 1,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

    });
};