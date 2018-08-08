const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU100000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU100000001",
                    "destination_container": "GRC-002",
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
                    "destination_container": "GRC-008",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};