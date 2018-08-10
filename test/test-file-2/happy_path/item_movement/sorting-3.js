const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-004",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-005",
                    "quantity": 3
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-003",
                    "quantity": 6
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};