module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        
        it('it should load ZEU-A01-01 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 238,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 238,
  "source_container": "ZEU-A01-01",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU-A01-01 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 62,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 62,
  "source_container": "ZEU-A01-01",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU-C01-01 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 80,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 80,
  "source_container": "ZEU-C01-01",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU-C01-01 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 144,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 144,
  "source_container": "ZEU-C01-01",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


        it('it should load ZEU-C01-02 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 120,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 120,
  "source_container": "ZEU-C01-02",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "quantity": 12,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 12,
  "source_container": "GRC-001",
  "destination_container": "SS-ZEU-180816-1",
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
  "quantity": 20,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 20,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180816-1",
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
  "quantity": 10,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 10,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180816-1",
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
  "quantity": 14,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 14,
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
  "quantity": 18,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 18,
  "source_container": "GRC-008",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
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
  "quantity": 70,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 70,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180816-3",
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
  "quantity": 14,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 14,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 4,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 4,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 2,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 2,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 20,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 20,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 2,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 2,
  "source_container": "GRC-015",
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
  "quantity": 6,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 6,
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
  "quantity": 2,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 2,
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
  "quantity": 6,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 6,
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
  "quantity": 170,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 170,
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
  "quantity": 6,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 6,
  "source_container": "GRC-004",
  "destination_container": "SS-ZEU-180816-5",
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
  "quantity": 2,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 2,
  "source_container": "GRC-013",
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
  "quantity": 2,
  "material_id": "4b1c51e8-6420-4e3e-a361-444e44114fbd",
  "sorted_quantity": 2,
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
  "quantity": 40,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 40,
  "source_container": "GRC-010",
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
  "quantity": 80,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 80,
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
  "quantity": 8,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 8,
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
  "quantity": 10,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 10,
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