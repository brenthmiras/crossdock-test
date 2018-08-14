module.exports = function (token, request) {

    describe('POST /item/load', function () {

        let dateString = new Date().toISOString().split('T')[0].split('-').join('');
        let idn1 = 'ID-'+ dateString.substring(2)+ '-001';
        let idn2 = 'ID-'+ dateString.substring(2)+ '-002';
        let idn3 = 'ID-'+ dateString.substring(2)+ '-003';

        // loading script
        it('it should load ZEU440000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 119,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 119,
  "source_container": "ZEU440000001",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU880000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 3,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 3,
  "source_container": "ZEU880000002",
  "destination_container": "SS-ZEU-180816-13",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "quantity": 20,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 20,
  "source_container": "ZEU990000001",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU700000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "8aa7e29d-6980-4e51-bc68-22b08b72865c",
  "sorted_quantity": 40,
  "source_container": "ZEU700000002",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU010000003 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
  "sorted_quantity": 40,
  "source_container": "ZEU010000003",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU600000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "72c19f17-ed10-4b51-a150-0b0b74496ff4",
  "sorted_quantity": 40,
  "source_container": "ZEU600000001",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU900000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09",
  "sorted_quantity": 40,
  "source_container": "ZEU900000001",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU700000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "8aa7e29d-6980-4e51-bc68-22b08b72865c",
  "sorted_quantity": 40,
  "source_container": "ZEU700000001",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU010000001 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
  "sorted_quantity": 40,
  "source_container": "ZEU010000001",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU010000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
  "sorted_quantity": 40,
  "source_container": "ZEU010000002",
  "destination_container": "SS-ZEU-180816-6",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU900000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09",
  "sorted_quantity": 40,
  "source_container": "ZEU900000002",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load ZEU600000002 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "72c19f17-ed10-4b51-a150-0b0b74496ff4",
  "sorted_quantity": 40,
  "source_container": "ZEU600000002",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-023 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 7,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 7,
  "source_container": "GRC-023",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-023 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 2,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 2,
  "source_container": "GRC-023",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-034 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 3,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 3,
  "source_container": "GRC-034",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-034 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 1,
  "source_container": "GRC-034",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-034 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 3,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 3,
  "source_container": "GRC-034",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-025 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 1,
  "source_container": "GRC-025",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-025 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 10,
  "source_container": "GRC-025",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-025 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 1,
  "source_container": "GRC-025",
  "destination_container": "SS-ZEU-180816-1",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-000 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 6,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 6,
  "source_container": "GRC-000",
  "destination_container": "SS-ZEU-180816-10",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-035 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 25,
  "material_id": "54de9ec3-7f33-469f-9b47-e517cb2796ad",
  "sorted_quantity": 25,
  "source_container": "GRC-035",
  "destination_container": "SS-ZEU-180816-11",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-035 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 50,
  "material_id": "5668377a-0355-421e-a16d-3dbff3de16a4",
  "sorted_quantity": 50,
  "source_container": "GRC-035",
  "destination_container": "SS-ZEU-180816-11",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-037 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 75,
  "material_id": "3d8bbb60-638c-4839-847a-3a20ed11daea",
  "sorted_quantity": 75,
  "source_container": "GRC-037",
  "destination_container": "SS-ZEU-180816-12",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-037 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "8a637440-d213-4737-9da3-be269d91e7ae",
  "sorted_quantity": 5,
  "source_container": "GRC-037",
  "destination_container": "SS-ZEU-180816-12",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-037 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "df4d5b38-d9b4-474b-bc0f-97c3cbe94817",
  "sorted_quantity": 10,
  "source_container": "GRC-037",
  "destination_container": "SS-ZEU-180816-12",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "quantity": 85,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 85,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-13",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "quantity": 40,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 40,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-13",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
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
  "quantity": 72,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 72,
  "source_container": "GRC-014",
  "destination_container": "SS-ZEU-180816-13",
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
  "material_id": "3f7ed6e2-87c4-417c-b4b5-1e6e515acb92",
  "sorted_quantity": 10,
  "source_container": "GRC-002",
  "destination_container": "SS-ZEU-180816-14",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
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
  "quantity": 2,
  "material_id": "c6a0c480-f144-4730-99f4-01b74ea8e76c",
  "sorted_quantity": 2,
  "source_container": "GRC-002",
  "destination_container": "SS-ZEU-180816-14",
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
  "material_id": "54de9ec3-7f33-469f-9b47-e517cb2796ad",
  "sorted_quantity": 2,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180816-15",
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
  "quantity": 8,
  "material_id": "b404acdd-a0b8-4adc-80c4-5f6dccf53573",
  "sorted_quantity": 8,
  "source_container": "GRC-017",
  "destination_container": "SS-ZEU-180816-15",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-028 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 8,
  "material_id": "2db9a94c-e976-4300-8694-314acb96bec4",
  "sorted_quantity": 8,
  "source_container": "GRC-028",
  "destination_container": "SS-ZEU-180816-15",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-028 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 2,
  "material_id": "faeaab5a-46c8-41a6-8c2f-861741426e47",
  "sorted_quantity": 2,
  "source_container": "GRC-028",
  "destination_container": "SS-ZEU-180816-15",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-019 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "4b1c51e8-6420-4e3e-a361-444e44114fbd",
  "sorted_quantity": 1,
  "source_container": "GRC-019",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-019 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 20,
  "material_id": "6bd1b793-3aa0-4f58-b7ba-e401d5a545fb",
  "sorted_quantity": 20,
  "source_container": "GRC-019",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-019 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 80,
  "material_id": "d20e1b31-02c5-498e-8a70-402c34a75a2d",
  "sorted_quantity": 80,
  "source_container": "GRC-019",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-019 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 4,
  "material_id": "fabdacd7-dd8f-4cc2-9b00-56a95148ab22",
  "sorted_quantity": 4,
  "source_container": "GRC-019",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-022 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 1,
  "source_container": "GRC-022",
  "destination_container": "SS-ZEU-180816-16",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-032 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "3f7ed6e2-87c4-417c-b4b5-1e6e515acb92",
  "sorted_quantity": 5,
  "source_container": "GRC-032",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-032 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "8a637440-d213-4737-9da3-be269d91e7ae",
  "sorted_quantity": 5,
  "source_container": "GRC-032",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-032 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "c6a0c480-f144-4730-99f4-01b74ea8e76c",
  "sorted_quantity": 1,
  "source_container": "GRC-032",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-033 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "2db9a94c-e976-4300-8694-314acb96bec4",
  "sorted_quantity": 1,
  "source_container": "GRC-033",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-033 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "b404acdd-a0b8-4adc-80c4-5f6dccf53573",
  "sorted_quantity": 1,
  "source_container": "GRC-033",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-033 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 1,
  "material_id": "faeaab5a-46c8-41a6-8c2f-861741426e47",
  "sorted_quantity": 1,
  "source_container": "GRC-033",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-024 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "3d8bbb60-638c-4839-847a-3a20ed11daea",
  "sorted_quantity": 5,
  "source_container": "GRC-024",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-024 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 8,
  "material_id": "5668377a-0355-421e-a16d-3dbff3de16a4",
  "sorted_quantity": 8,
  "source_container": "GRC-024",
  "destination_container": "SS-ZEU-180816-17",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-024 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "df4d5b38-d9b4-474b-bc0f-97c3cbe94817",
  "sorted_quantity": 5,
  "source_container": "GRC-024",
  "destination_container": "SS-ZEU-180816-17",
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
  "quantity": 5,
  "material_id": "cc28282f-a260-43e6-9275-4222d68bf674",
  "sorted_quantity": 5,
  "source_container": "GRC-001",
  "destination_container": "SS-ZEU-180816-18",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-039 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 8,
  "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
  "sorted_quantity": 8,
  "source_container": "GRC-039",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-039 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 40,
  "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
  "sorted_quantity": 40,
  "source_container": "GRC-039",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-038 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
  "sorted_quantity": 10,
  "source_container": "GRC-038",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-038 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
  "sorted_quantity": 35,
  "source_container": "GRC-038",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-036 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
  "sorted_quantity": 10,
  "source_container": "GRC-036",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-036 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
  "sorted_quantity": 35,
  "source_container": "GRC-036",
  "destination_container": "SS-ZEU-180816-2",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-011 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "cc1c4bcd-cabb-4551-97c1-330100e0a625",
  "sorted_quantity": 35,
  "source_container": "GRC-011",
  "destination_container": "SS-ZEU-180816-3",
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
  "quantity": 5,
  "material_id": "07ef3043-0ad0-40eb-95fa-1f83db6ce6fc",
  "sorted_quantity": 5,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 10,
  "material_id": "18568205-3205-4c02-b0fb-0c204dd7cc46",
  "sorted_quantity": 10,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180816-4",
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
  "quantity": 10,
  "material_id": "688368b7-adf3-4712-ae8d-2bca4e05eea8",
  "sorted_quantity": 10,
  "source_container": "GRC-003",
  "destination_container": "SS-ZEU-180816-4",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-006 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
  "sorted_quantity": 10,
  "source_container": "GRC-006",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-006 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 35,
  "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
  "sorted_quantity": 35,
  "source_container": "GRC-006",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-006 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 8,
  "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
  "sorted_quantity": 8,
  "source_container": "GRC-006",
  "destination_container": "SS-ZEU-180816-5",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-016 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 7,
  "material_id": "92ac331c-6ea3-4c9c-ac6d-ffe6803fe987",
  "sorted_quantity": 7,
  "source_container": "GRC-016",
  "destination_container": "SS-ZEU-180816-7",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-016 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 9,
  "material_id": "d1650e4a-058d-4896-9794-337cd4ab05a1",
  "sorted_quantity": 9,
  "source_container": "GRC-016",
  "destination_container": "SS-ZEU-180816-7",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-027 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "07ef3043-0ad0-40eb-95fa-1f83db6ce6fc",
  "sorted_quantity": 5,
  "source_container": "GRC-027",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-027 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 8,
  "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
  "sorted_quantity": 8,
  "source_container": "GRC-027",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-030 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "18568205-3205-4c02-b0fb-0c204dd7cc46",
  "sorted_quantity": 10,
  "source_container": "GRC-030",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-030 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "688368b7-adf3-4712-ae8d-2bca4e05eea8",
  "sorted_quantity": 10,
  "source_container": "GRC-030",
  "destination_container": "SS-ZEU-180816-8",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-01"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-021 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 10,
  "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
  "sorted_quantity": 10,
  "source_container": "GRC-021",
  "destination_container": "SS-ZEU-180816-9",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });
    

        it('it should load GRC-021 successfully', function (done) {
            request
            .post('/item/load')
            .set('x-access-token', token)
            .send({
  "quantity": 5,
  "material_id": "90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6",
  "sorted_quantity": 5,
  "source_container": "GRC-021",
  "destination_container": "SS-ZEU-180816-9",
  "destination_container_location": "MAX999",
  "source_container_location": "DOCK-02"
})
            .expect(200, function (err, result) {
                done();
            })
        });


    });
};