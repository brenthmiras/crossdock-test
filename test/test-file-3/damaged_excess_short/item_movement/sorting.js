const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('it should sort ZEU000000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000001",
                    "destination_container": "GRC-028",
                    "quantity": 2
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        // Inbound doc 2

        it('it should sort ZEU010000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000001",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU010000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000002",
                    "destination_container": "ZEU-A05-01",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU010000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000003",
                    "destination_container": "ZEU-A03-01",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU010000004 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU010000004",
                    "destination_container": "GRC-039",
                    "quantity": 39
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        // Inbound doc 3

        it('it should sort ZEU011000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU011000001",
                    "destination_container": "GRC-019",
                    "quantity": 19
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU011000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU011000001",
                    "destination_container": "GRC-014",
                    "quantity": 85
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU100000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU100000001",
                    "destination_container": "GRC-003",
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
                    "destination_container": "GRC-027",
                    "quantity": 5
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
                    "destination_container": "GRC-023",
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
                    "destination_container": "GRC-025",
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
                    "destination_container": "GRC-021",
                    "quantity": 10
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU111000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU111000001",
                    "destination_container": "GRC-028",
                    "quantity": 8
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU111000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU111000001",
                    "destination_container": "GRC-033",
                    "quantity": 1
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
                    "destination_container": "GRC-036",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
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
                    if (err) done(err);
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
                    if (err) done(err);
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
                    if (err) done(err);
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
                    if (err) done(err);
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
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU300000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU300000001",
                    "destination_container": "GRC-030",
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
                    "destination_container": "GRC-003",
                    "quantity": 10
                })
                .expect(200, function (err, result) {

                    done();
                });

        });



        ///////////////////////////////
        /// ZEU330000001 - 3 items ////
        ///////////////////////////////
        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-021",
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
                    "destination_container": "GRC-034",
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
                    "destination_container": "GRC-000",
                    "quantity": 6
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        ///////////////////////////////
        /// ZEU333000001 - 2 items ////
        ///////////////////////////////
        it('it should sort ZEU333000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU333000001",
                    "destination_container": "GRC-032",
                    "quantity": 5
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU333000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU333000001",
                    "destination_container": "GRC-002",
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
                    "destination_container": "GRC-006",
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
                    "destination_container": "GRC-036",
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
                    "destination_container": "GRC-038",
                    "quantity": 10,
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
                    "destination_container": "GRC-036",
                    "quantity": 30,
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
                    "destination_container": "GRC-038",
                    "quantity": 21,
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
                    "destination_container": "GRC-016",
                    "quantity": 7,
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
                    "destination_container": "ZEU-A06-01",
                    "quantity": 119,
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
                    "destination_container": "GRC-025",
                    "quantity": 28,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU444000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU444000001",
                    "destination_container": "GRC-035",
                    "quantity": 21,
                    "sku": "616701",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU444000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU444000001",
                    "destination_container": "GRC-017",
                    "quantity": 2,
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
                    "destination_container": "GRC-030",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });
        it('it should sort ZEU500000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU500000001",
                    "destination_container": "GRC-003",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        // test file 2

        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-034",
                    "quantity": 3,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });
        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-011",
                    "quantity": 35,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });
        it('it should sort ZEU550000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU550000001",
                    "destination_container": "GRC-025",
                    "quantity": 10,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });


        it('it should sort ZEU555000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU555000001",
                    "destination_container": "GRC-035",
                    "quantity": 50,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU555000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU555000001",
                    "destination_container": "GRC-024",
                    "quantity": 8,
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
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
                    "quantity": 40
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

        // KANINA
        it('it should sort ZEU660000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU660000001",
                    "destination_container": "GRC-022",
                    "quantity": 1
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
                    "destination_container": "GRC-001",
                    "quantity": 5
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        it('it should sort ZEU666000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU666000001",
                    "destination_container": "GRC-032",
                    "quantity": 5
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
                    "quantity": 38
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        //08-09-1
        //20046526
        it('it should sort ZEU770000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU770000001",
                    "destination_container": "GRC-025",
                    "quantity": 1
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
                    "destination_container": "GRC-016",
                    "quantity": 9
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
                    "destination_container": "GRC-023",
                    "quantity": 2
                })
                .expect(200, function (err, result) {

                    done();
                });
        });

        it('it should sort ZEU777000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU777000001",
                    "destination_container": "GRC-017",
                    "quantity": 7
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
                    "destination_container": "GRC-027",
                    "quantity": 8,
                    "sku": "615999",
                    "ship_to_code": "STC-000000531"
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
                    "destination_container": "GRC-039",
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

        //from test-file-2
        it('it should sort ZEU880000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU880000001",
                    "destination_container": "ZEU-C01-01",
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
                    "destination_container": "GRC-018",
                    "quantity": 1,
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
                    "destination_container": "GRC-014",
                    "quantity": 3,
                    "sku": "21003055",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });


        it('it should sort ZEU888000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU888000001",
                    "destination_container": "GRC-002",
                    "quantity": 1,
                    "sku": "JF000896"
                })
                .expect(200, function (err, result) {

                    done();
                });

        });

        it('it should sort ZEU900000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU900000001",
                    "destination_container": "ZEU-A02-01",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
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
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        // Second file
        it('it should sort ZEU990000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000001",
                    "destination_container": "GRC-014",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU990000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000001",
                    "destination_container": "ZEU-C01-02",
                    "quantity": 20
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU990000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000002",
                    "destination_container": "GRC-019",
                    "quantity": 50
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU990000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU990000003",
                    "destination_container": "GRC-019",
                    "quantity": 20
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU999000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU999000001",
                    "destination_container": "GRC-037",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

        it('it should sort ZEU999000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU999000001",
                    "destination_container": "GRC-024",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    if (err) done(err);
                    done();
                });
        });

    });
};