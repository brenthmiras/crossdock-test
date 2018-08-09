module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('should be successful', function () {
            // Pass

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
                        "quantity": 40
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
            it('it should sort ZEU440000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU440000001",
                        "destination_container": "ZEU-A01-01",
                        "quantity": 119,
                        "sku": "616701",
                        "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });

            });

            it('it should sort ZEU440000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU440000001",
                        "destination_container": "GRC-001",
                        "quantity": 7,
                        "sku": "616701",
                        "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });

            });

            it('it should sort ZEU440000002 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU440000002",
                        "destination_container": "ZEU-A01-01",
                        "quantity": 30,
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

            it('it should sort ZEU660000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU660000001",
                        "destination_container": "GRC-013",
                        "quantity": 1,
                        // "sku": "67106205",
                        // "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });
            });
            it('it should sort ZEU660000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU660000001",
                        "destination_container": "GRC-012",
                        "quantity": 5,
                        // "sku": "67106205",
                        // "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });
            });

            it('it should sort ZEU770000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU770000001",
                        "destination_container": "GRC-007",
                        "quantity": 2
                        // "sku": "67106205",
                        // "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });
            });

            it('it should sort ZEU770000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU770000001",
                        "destination_container": "GRC-006",
                        "quantity": 1
                        // "sku": "67106205",
                        // "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });
            });

            it('it should sort ZEU770000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU770000001",
                        "destination_container": "GRC-001",
                        "quantity": 9
                        // "sku": "67106205",
                        // "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });
            });

            it('it should sort ZEU880000001 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU880000001",
                        "destination_container": "GSRT-B01-03",
                        "quantity": 72,
                        "sku": "21003055",
                        "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });

            });

            it('it should sort ZEU880000002 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU880000002",
                        "destination_container": "GRC-015",
                        "quantity": 2,
                        "sku": "21003055",
                        "ship_to_code": "STC-000000531"
                    })
                    .expect(200, function (err, result) {

                        done();
                    });

            });
            it('it should sort ZEU880000002 successfully', function (done) {

                request
                    .post('/item/sort')
                    .set('x-access-token', token)
                    .send({
                        "source_container": "ZEU880000002",
                        "destination_container": "ZEU-C01-01",
                        "quantity": 3,
                        "sku": "21003055",
                        "ship_to_code": "STC-000000531"
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

        });
    });
};