module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        

        it('it should transport GSRT-A01-03 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-5",
  "grid_id": "GSRT-A01-03",
  "customer_secondary_id": "SCC-003605",
  "source_container": "GRC-001",
  "destination_container": "GRC-001",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-6",
  "grid_id": "GSRT-B01-01",
  "customer_secondary_id": "SCC-004050",
  "source_container": "GRC-004",
  "destination_container": "GRC-004",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-6",
  "grid_id": "GSRT-B01-02",
  "customer_secondary_id": "SCC-004050",
  "source_container": "GRC-005",
  "destination_container": "GRC-005",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport ZEU-C01-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-6",
  "grid_id": "ZEU-C01-01",
  "customer_secondary_id": "SCC-004050",
  "source_container": "ZEU-C01-01",
  "destination_container": "ZEU-C01-01",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-04 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-4",
  "grid_id": "GSRT-A01-04",
  "customer_secondary_id": "SCC-004110",
  "source_container": "GRC-012",
  "destination_container": "GRC-012",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-06 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "GSRT-B01-06",
  "customer_secondary_id": "SCC-004109",
  "source_container": "GRC-009",
  "destination_container": "GRC-009",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-07 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "GSRT-B01-07",
  "customer_secondary_id": "SCC-004109",
  "source_container": "GRC-010",
  "destination_container": "GRC-010",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport ZEU-C01-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "ZEU-C01-02",
  "customer_secondary_id": "SCC-004109",
  "source_container": "ZEU-C01-02",
  "destination_container": "ZEU-C01-02",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-05 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "GSRT-B01-05",
  "customer_secondary_id": "SCC-004110",
  "source_container": "GRC-013",
  "destination_container": "GRC-013",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-3",
  "grid_id": "GSRT-A01-02",
  "customer_secondary_id": "SCC-004050",
  "source_container": "GRC-003",
  "destination_container": "GRC-003",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-B01-04 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-8",
  "grid_id": "GSRT-B01-04",
  "customer_secondary_id": "SCC-003605",
  "source_container": "GRC-002",
  "destination_container": "GRC-002",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-07 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-1",
  "grid_id": "GSRT-A01-07",
  "customer_secondary_id": "SCC-004113",
  "source_container": "GRC-014",
  "destination_container": "GRC-014",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-06 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-1",
  "grid_id": "GSRT-A01-06",
  "customer_secondary_id": "SCC-004195",
  "source_container": "GRC-015",
  "destination_container": "GRC-015",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport ZEU-A01-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-1",
  "grid_id": "ZEU-A01-01",
  "customer_secondary_id": "SCC-004195",
  "source_container": "ZEU-A01-01",
  "destination_container": "ZEU-A01-01",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-05 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-1",
  "grid_id": "GSRT-A01-05",
  "customer_secondary_id": "SCC-004453",
  "source_container": "GRC-017",
  "destination_container": "GRC-017",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });


        it('it should transport GSRT-A01-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-2",
  "grid_id": "GSRT-A01-01",
  "customer_secondary_id": "SCC-004051",
  "source_container": "GRC-008",
  "destination_container": "GRC-008",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                if (err) throw err;
                done();
            })
        });
    });
};