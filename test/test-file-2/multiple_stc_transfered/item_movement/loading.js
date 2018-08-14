module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        
        it('it should load ZEU440000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 119,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 119,
  "source_container": "ZEU440000001",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "ZEU440000001"
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
  "quantity": 31,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 31,
  "source_container": "ZEU440000002",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "ZEU440000002"
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
  "quantity": 60,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 60,
  "source_container": "ZEU990000002",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "ZEU990000002"
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
  "quantity": 40,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 40,
  "source_container": "ZEU990000001",
  "destination_container": "SS-ZEU-180815-7",
  "destination_container_location": "MAX999",
  "source_container_location": "ZEU990000001"
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
  "quantity": 72,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 72,
  "source_container": "ZEU880000001",
  "destination_container": "SS-ZEU-180815-7",
  "destination_container_location": "MAX999",
  "source_container_location": "ZEU880000001"
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
  "quantity": 35,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 35,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180815-1",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-003"
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
  "quantity": 7,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 7,
  "source_container": "GRC-008",
  "destination_container": "SS-ZEU-180815-2",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-008"
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
  "quantity": 9,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 9,
  "source_container": "GRC-008",
  "destination_container": "SS-ZEU-180815-2",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-008"
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
  "quantity": 7,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 7,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180815-2",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-014"
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
  "quantity": 2,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 2,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180815-2",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-014"
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
  "quantity": 1,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 1,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-015"
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
  "quantity": 10,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 10,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-015"
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
  "quantity": 1,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 1,
  "source_container": "GRC-015",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-015"
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
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 10,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-012"
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
  "quantity": 5,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 5,
  "source_container": "GRC-012",
  "destination_container": "SS-ZEU-180815-3",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-012"
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
  "quantity": 3,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 3,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180815-4",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-017"
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
  "quantity": 1,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 1,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180815-4",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-017"
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
  "quantity": 3,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 3,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180815-4",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-017"
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
  "quantity": 6,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 6,
  "source_container": "GRC-001",
  "destination_container": "SS-ZEU-180815-4",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-001"
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
  "quantity": 5,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 5,
  "source_container": "GRC-002",
  "destination_container": "SS-ZEU-180815-5",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-002"
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
  "quantity": 1,
  "material_id": "4b1c51e8-6420-4e3e-a361-444e44114fbd",
  "sorted_quantity": 1,
  "source_container": "GRC-010",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-010"
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
  "quantity": 20,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 20,
  "source_container": "GRC-010",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-010"
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
  "quantity": 40,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 40,
  "source_container": "GRC-009",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-009"
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
  "quantity": 4,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 4,
  "source_container": "GRC-009",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-009"
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
  "quantity": 1,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 1,
  "source_container": "GRC-013",
  "destination_container": "SS-ZEU-180815-6",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-013"
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
  "quantity": 85,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 85,
  "source_container": "GRC-004",
  "destination_container": "SS-ZEU-180815-7",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-004"
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
  "quantity": 3,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 3,
  "source_container": "GRC-004",
  "destination_container": "SS-ZEU-180815-7",
  "destination_container_location": "MAX999",
  "source_container_location": "GRC-004"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    });
};