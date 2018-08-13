const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/sort', function () {

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
                    "destination_container": "GRC-005",
                    "quantity": 5
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
                    "destination_container": "GRC-001",
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




        it('it should sort ZEU300000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU300000001",
                    "destination_container": "GRC-002",
                    "quantity": 10
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU300000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU300000001",
                    "destination_container": "GRC-007",
                    "quantity": 10
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU400000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000001",
                    "destination_container": "GRC-008",
                    "quantity": 35,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU400000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000001",
                    "destination_container": "GRC-004",
                    "quantity": 5,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });




        it('it should sort ZEU400000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000002",
                    "destination_container": "GRC-004",
                    "quantity": 30,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });


        it('it should sort ZEU400000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000002",
                    "destination_container": "GRC-001",
                    "quantity": 10,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });


        it('it should sort ZEU400000003 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU400000003",
                    "destination_container": "GRC-001",
                    "quantity": 25,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
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
                    "destination_container": "GRC-007",
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
                    "destination_container": "GRC-002",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU600000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU600000001",
                    "destination_container": "ZEU-A05-02",
                    "quantity": 40,
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });
        });
        it('it should sort ZEU600000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU600000002",
                    "destination_container": "ZEU-A01-01",
                    "quantity": 35,
                    // "sku": "300796",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        it('it should sort ZEU700000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU700000001",
                    "destination_container": "ZEU-A04-01",
                    "quantity": 40
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        it('it should sort ZEU700000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU700000002",
                    "destination_container": "ZEU-A02-02",
                    "quantity": 25
                    // "sku": "67106205",
                    // "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        it('it should sort ZEU800000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU800000001",
                    "destination_container": "GRC-008",
                    "quantity": 8,
                    "sku": "615999",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

         it('it should simulate date -1', function (done) {
            request
               .post('/test/minus_one')
               .set('x-access-token', token)
               .send({
               })
               .expect(200, function (err, result) {
                    console.log('continue sorting today');
                   done();
               });
        });



        it('it should sort ZEU800000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU800000001",
                    "destination_container": "GRC-003",
                    "quantity": 8,
                    "sku": "615999",
                    "ship_to_code": "STC-000000534"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU800000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU800000001",
                    "destination_container": "GRC-005",
                    "quantity": 8,
                    "sku": "615999",
                    "ship_to_code": "STC-000000616"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });



        it('it should sort ZEU9000000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000001",
                    "destination_container": "ZEU-A02-01",
                    "quantity": 35,
                    "sku": "302091",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should sort ZEU900000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000002",
                    "destination_container": "ZEU-A02-01",
                    "quantity": 5,
                    "sku": "302091",
                    "ship_to_code": "STC-000000534"
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should sort ZEU900000002 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000002",
                    "destination_container": "ZEU-A01-02",
                    "quantity": 32,
                    "sku": "302091",
                    "ship_to_code": "STC-000000534"
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should sort ZEU000000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000001",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU000000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000002",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU000000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000003",
                    "destination_container": "ZEU-A03-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU000000004 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000004",
                    "destination_container": "ZEU-A03-02",
                    "quantity": 25
                })
                .expect(200, function (err, result) {
                    done();
             });
        });

    });
};