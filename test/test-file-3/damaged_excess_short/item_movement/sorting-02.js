const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        it('it should sort 10 ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-036",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });


        it('it should sort 10 ZEU200000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU200000001",
                    "destination_container": "GRC-038",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort 10 ZEU200000001 successfully', function (done) {
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

            //second

            it('it should sort 1 ZEU220000001 successfully', function (done) {
                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU220000001",
                        "destination_container": "GRC-018",
                        "quantity": 1,
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            });

            //third

            it('it should sort 75 ZEU222000001 successfully', function (done) {
                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU222000001",
                        "destination_container": "GRC-037",
                        "quantity": 75,
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            });

            it('it should sort 5 ZEU220000001 successfully', function (done) {
                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU222000001",
                        "destination_container": "GRC-024",
                        "quantity": 5,
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            });


                
    });
};