module.exports = function (token, request) {

    describe('POST /item/transport', function () {

<<<<<<< HEAD
        it('it should transport GSRT-A01-04 successfully', function (done) {
=======
        //shipment 7
        it('it should transport ZEU-A04-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
            "shipment_id": "SS-ZEU-180815-7",
            "grid_id": "ZEU-A04-01",
            "customer_secondary_id": "SCC-004030",
            "source_container": "ZEU-A04-01",
            "destination_container": "ZEU-A04-01",
            "destination_container_location": "DOCK-01"
            })
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should transport ZEU-A04-02 successfully', function (done) {
>>>>>>> 6d29643abb20bd90cd52ddf75646e1df885ea607
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "ZEU-A04-02",
  "customer_secondary_id": "SCC-004030",
  "source_container": "ZEU-A04-02",
  "destination_container": "ZEU-A04-02",
  "destination_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should transport ZEU-A05-01 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-7",
  "grid_id": "ZEU-A05-01",
  "customer_secondary_id": "SCC-004030",
  "source_container": "ZEU-A05-01",
  "destination_container": "ZEU-A05-01",
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
  "shipment_id": "SS-ZEU-180815-3",
  "grid_id": "GSRT-A01-09",
  "customer_secondary_id": "SCC-004050",
  "source_container": "GRC-011",  "destination_container": "GRC-011",
  "destination_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });

        // shipment 11
        it('it should transport GSRT-A01-03 successfully', function (done) {
            request
            .post('/item/transport')
            .set('x-access-token', token)
            .send({
  "shipment_id": "SS-ZEU-180815-11",
  "grid_id": "GSRT-A01-03",  "customer_secondary_id": "SCC-004267",
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
  "shipment_id": "SS-ZEU-180815-11",
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
  "shipment_id": "SS-ZEU-180815-11",
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
  "shipment_id": "SS-ZEU-180815-11",
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

    });

    //shipment 9
    it('it should transport GSRT-A01-01 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-9",
"grid_id": "GSRT-A01-01",
"customer_secondary_id": "SCC-004051",
"source_container": "GRC-016",
"destination_container": "GRC-016",
"destination_container_location": "DOCK-02"
})            .expect(200, function (err, result) {
            done();
        })
    });

    //shipment 2
    it('it should transport GSRT-A01-08 successfully', function (done) {
        request            .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-2",
"grid_id": "GSRT-A01-08",  "customer_secondary_id": "SCC-004528",
"source_container": "GRC-036",
"destination_container": "GRC-036",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {
            done();            })
    });

    it('it should transport GSRT-A01-07 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-2",
"grid_id": "GSRT-A01-07",  "customer_secondary_id": "SCC-004569",
"source_container": "GRC-038",
"destination_container": "GRC-038",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {
            done();
        })
    });


    it('it should transport GSRT-A01-06 successfully', function (done) {
        request
        .post('/item/transport')            .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-2",
"grid_id": "GSRT-A01-06",
"customer_secondary_id": "SCC-005619",
"source_container": "GRC-039",
"destination_container": "GRC-039",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {
            done();
        })
    });


    it('it should transport ZEU-A03-01 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-2",
"grid_id": "ZEU-A03-01",
"customer_secondary_id": "SCC-005619",
"source_container": "ZEU-A03-01",
"destination_container": "ZEU-A03-01",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {
            done();
        })
    });


    it('it should transport ZEU-A03-02 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-2",
"grid_id": "ZEU-A03-02",
"customer_secondary_id": "SCC-005619",
"source_container": "ZEU-A03-02",
"destination_container": "ZEU-A03-02",
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
"shipment_id": "SS-ZEU-180815-1",
"grid_id": "GSRT-A01-15",
"customer_secondary_id": "SCC-004113",
"source_container": "GRC-023",
"destination_container": "GRC-023",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport GSRT-A01-14 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-1",
"grid_id": "GSRT-A01-14",
"customer_secondary_id": "SCC-004195",
"source_container": "GRC-025",
"destination_container": "GRC-025",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport ZEU-A06-01 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-1",
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
"shipment_id": "SS-ZEU-180815-1",
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

    //shipment 5
    it('it should transport GSRT-A01-05 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-5",
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
"shipment_id": "SS-ZEU-180815-5",
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

    //shipment 15
    it('it should transport GSRT-A01-10 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-15",
"grid_id": "GSRT-A01-10",
"customer_secondary_id": "SCC-003605",
"source_container": "GRC-000",
"destination_container": "GRC-000",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 4
    it('it should transport GSRT-A01-11 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-4",
"grid_id": "GSRT-A01-11",
"customer_secondary_id": "SCC-004025",
"source_container": "GRC-003",
"destination_container": "GRC-003",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport ZEU-A05-02 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-4",
"grid_id": "ZEU-A05-02",
"customer_secondary_id": "SCC-004025",
"source_container": "ZEU-A05-02",
"destination_container": "ZEU-A05-02",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 13
    it('it should transport GSRT-A01-12 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-13",
"grid_id": "GSRT-A01-12",
"customer_secondary_id": "SCC-004110",
"source_container": "GRC-021",
"destination_container": "GRC-021",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 14
    it('it should transport GSRT-B01-02 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-14",
"grid_id": "GSRT-B01-02",
"customer_secondary_id": "SCC-004052",
"source_container": "GRC-017",
"destination_container": "GRC-017",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport GSRT-B01-01 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-14",
"grid_id": "GSRT-B01-01",
"customer_secondary_id": "SCC-004267",
"source_container": "GRC-028",
"destination_container": "GRC-028",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 8
    it('it should transport GSRT-B01-06 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-8",
"grid_id": "GSRT-B01-06",
"customer_secondary_id": "SCC-004535",
"source_container": "GRC-037",
"destination_container": "GRC-037",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 17
    it('it should transport GSRT-B01-05 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-17",
"grid_id": "GSRT-B01-05",
"customer_secondary_id": "SCC-004115",
"source_container": "GRC-024",
"destination_container": "GRC-024",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport GSRT-B01-04 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-17",
"grid_id": "GSRT-B01-04",
"customer_secondary_id": "SCC-004406",
"source_container": "GRC-032",
"destination_container": "GRC-032",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport GSRT-B01-03 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-17",
"grid_id": "GSRT-B01-03",
"customer_secondary_id": "SCC-004431",
"source_container": "GRC-033",
"destination_container": "GRC-033",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {
            done();
        })
    });

    //shipment 16
    it('it should transport GSRT-B01-15 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-16",
"grid_id": "GSRT-B01-15",  "customer_secondary_id": "SCC-004109",
"source_container": "GRC-019",
"destination_container": "GRC-019",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport ZEU-C01-02 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-16",
"grid_id": "ZEU-C01-02",  "customer_secondary_id": "SCC-004109",
"source_container": "ZEU-C01-02",
"destination_container": "ZEU-C01-02",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport GSRT-B01-13 successfully', function (done) {
        request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-16",
"grid_id": "GSRT-B01-13",
"customer_secondary_id": "SCC-004110",
"source_container": "GRC-022",
"destination_container": "GRC-022",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {
            done();
        })
    });

    //shipment 6
    it('it should transport GSRT-B01-07 successfully', function (done) {            request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-6",
"grid_id": "GSRT-B01-07",  "customer_secondary_id": "SCC-004522",
"source_container": "GRC-035",
"destination_container": "GRC-035",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 18
    it('it should transport GSRT-B01-12 successfully', function (done) {            request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-18",
"grid_id": "GSRT-B01-12",  "customer_secondary_id": "SCC-003605",
"source_container": "GRC-001",
"destination_container": "GRC-001",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 12
    it('it should transport GSRT-B01-08 successfully', function (done) {            request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-12",
"grid_id": "GSRT-B01-08",  "customer_secondary_id": "SCC-003628",
"source_container": "GRC-002",
"destination_container": "GRC-002",
"destination_container_location": "DOCK-01"
})
        .expect(200, function (err, result) {                done();
        })
    });

    //shipment 10

    it('it should transport GSRT-B01-11 successfully', function (done) {            request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-10",
"grid_id": "GSRT-B01-11",  "customer_secondary_id": "SCC-004050",
"source_container": "GRC-014",
"destination_container": "GRC-014",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });


    it('it should transport ZEU-C01-01 successfully', function (done) {            request
        .post('/item/transport')
        .set('x-access-token', token)
        .send({
"shipment_id": "SS-ZEU-180815-10",
"grid_id": "ZEU-C01-01",  "customer_secondary_id": "SCC-004050",
"source_container": "ZEU-C01-01",
"destination_container": "ZEU-C01-01",
"destination_container_location": "DOCK-02"
})
        .expect(200, function (err, result) {                done();
        })
    });
};