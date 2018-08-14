module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        
        it('it should load ZEU440000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 595,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 595,
  "source_container": "ZEU440000001",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU440000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 155,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 155,
  "source_container": "ZEU440000002",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU990000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 200,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 200,
  "source_container": "ZEU990000001",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU880000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 360,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 360,
  "source_container": "ZEU880000001",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU990000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 300,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 300,
  "source_container": "ZEU990000002",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-003 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 175,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 175,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-014 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 35,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-014 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 10,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-008 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 35,
  "source_container": "GRC-008",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-008 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 45,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 45,
  "source_container": "GRC-008",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-015 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 5,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-015 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 50,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 50,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-015 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 5,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-012 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 50,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 50,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-012 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 25,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 25,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180816-3",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 30,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 30,
  "source_container": "GRC-001",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-017 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 15,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 15,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-017 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 5,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-017 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 15,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 15,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-004 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 425,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 425,
  "source_container": "GRC-004",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-004 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 15,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 15,
  "source_container": "GRC-004",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-010 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "4b1c51e8-6420-4e3e-a361-444e44114fbd",
  "sorted_quantity": 5,
  "source_container": "GRC-010",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-010 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 100,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 100,
  "source_container": "GRC-010",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-013 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 5,
  "source_container": "GRC-013",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-009 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 200,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 200,
  "source_container": "GRC-009",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-009 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 20,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 20,
  "source_container": "GRC-009",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load GRC-002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 25,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 25,
  "source_container": "GRC-002",
  "destination_container": "SS-ZEU-180816-7",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    });
};