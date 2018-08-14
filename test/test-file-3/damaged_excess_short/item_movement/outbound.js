module.exports = function (token, request) {

    describe('POST /item/transport', function () {

        // shipment 5
        it('it should transport GSRT-A01-04 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-5",
  "grid_id": "GSRT-A01-04",
  "customer_secondary_id": "SCC-004026",
  "source_container": "GRC-005",
  "destination_container": "GRC-005",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport GSRT-A01-05 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-5",
  "grid_id": "GSRT-A01-05",
  "customer_secondary_id": "SCC-004026",
  "source_container": "GRC-006",
  "destination_container": "GRC-006",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport ZEU-A02-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-5",
  "grid_id": "ZEU-A02-01",
  "customer_secondary_id": "SCC-004026",
  "source_container": "ZEU-A02-01",
  "destination_container": "ZEU-A02-01",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        //shipment 1
        it('it should transport GSRT-A01-15 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-1",
  "grid_id": "GSRT-A01-15",
  "customer_secondary_id": "SCC-004113",
  "source_container": "GRC-023",
  "destination_container": "GRC-023",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport GSRT-A01-14 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-1",
  "grid_id": "GSRT-A01-14",
  "customer_secondary_id": "SCC-004195",
  "source_container": "GRC-025",
  "destination_container": "GRC-025",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport ZEU-A06-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-1",
  "grid_id": "ZEU-A06-01",
  "customer_secondary_id": "SCC-004195",
  "source_container": "ZEU-A06-01",
  "destination_container": "ZEU-A06-01",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport GSRT-A01-13 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-1",
  "grid_id": "GSRT-A01-13",
  "customer_secondary_id": "SCC-004453",
  "source_container": "GRC-034",
  "destination_container": "GRC-034",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });

        //shipment 4
        it('it should transport GSRT-A01-11 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-4",
  "grid_id": "GSRT-A01-11",
  "customer_secondary_id": "SCC-004025",
  "source_container": "GRC-003",
  "destination_container": "GRC-003",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport ZEU-A05-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-4",
  "grid_id": "ZEU-A05-02",
  "customer_secondary_id": "SCC-004025",
  "source_container": "ZEU-A05-02",
  "destination_container": "ZEU-A05-02",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        //shipment 3
it('it should transport GSRT-A01-09 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-3",
  "grid_id": "GSRT-A01-09",
  "customer_secondary_id": "SCC-004050",
  "source_container": "GRC-011",
  "destination_container": "GRC-011",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        //shipment 8
it('it should transport GSRT-A01-03 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-8",
  "grid_id": "GSRT-A01-03",
  "customer_secondary_id": "SCC-004267",
  "source_container": "GRC-027",
  "destination_container": "GRC-027",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport ZEU-A01-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-8",
  "grid_id": "ZEU-A01-02",
  "customer_secondary_id": "SCC-004267",
  "source_container": "ZEU-A01-02",
  "destination_container": "ZEU-A01-02",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport GSRT-A01-02 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-8",
  "grid_id": "GSRT-A01-02",
  "customer_secondary_id": "SCC-004374",
  "source_container": "GRC-030",
  "destination_container": "GRC-030",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should transport ZEU-A01-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180816-8",
  "grid_id": "ZEU-A01-01",
  "customer_secondary_id": "SCC-004374",
  "source_container": "ZEU-A01-01",
  "destination_container": "ZEU-A01-01",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });

        
        //shipment 10

        //shipment 9

        //shipment 6

        //shipment 7

        //shipment 14

        //shipment 11

        //shipment 15

        //shipment 12

        //shipment 17

        //shipment 13


    });
};