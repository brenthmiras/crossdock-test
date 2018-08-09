module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('should be successful', function () {
            // Pass

            it('it should receive ZEU000000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU000000001',
                        'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                        'quantity': 40
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU000000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU000000002',
                        'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                        'quantity': 40
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU000000003 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU000000003',
                        'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                        'quantity': 40
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU000000004 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU000000004',
                        'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                        'quantity': 40
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            
            it('it should receive ZEU110000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU110000001',
                        'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
                        'quantity': 18
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive excess ZEU110000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU110000002',
                        'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
                        'quantity': 2
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive 1 ZEU220000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU220000001',
                        'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                        'quantity': 1
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive 3 excess ZEU220000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU220000002',
                        'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                        'quantity': 3
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU330000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU330000001',
                        'material_id': '90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6',
                        'quantity': 14
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });


            it('it should receive 9 excess ZEU330000002', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU330000002',
                        'material_id': '90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6',
                        'quantity': 9
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            it('it should receive ZEU440000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU440000001',
                        'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                        'quantity': 126
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU440000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU440000002',
                        'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                        'quantity': 30
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive 2 Damaged 20046527 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-DAMAGED',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU440000003',
                        'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                        'quantity': 2
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU550000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU550000001',
                        'material_id': 'cc1c4bcd-cabb-4551-97c1-330100e0a625',
                        'quantity': 48
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive 10 EXCESS 20062058', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU550000002',
                        'material_id': 'cc1c4bcd-cabb-4551-97c1-330100e0a625',
                        'quantity': 10
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });


            it('it should receive ZEU660000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU660000001',
                        'material_id': 'cc28282f-a260-43e6-9275-4222d68bf674',
                        'quantity': 6
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            it('it should receive 7 excess 21066581', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU660000002',
                        'material_id': 'cc28282f-a260-43e6-9275-4222d68bf674',
                        'quantity': 7
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU770000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU770000001',
                        'material_id': 'd1650e4a-058d-4896-9794-337cd4ab05a1',
                        'quantity': 12
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive 3 excess 20046526', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU770000002',
                        'material_id': 'd1650e4a-058d-4896-9794-337cd4ab05a1',
                        'quantity': 3
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });


            it('it should receive ZEU88000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU880000001',
                        'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                        'quantity': 72
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            it('it should receive ZEU88000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU880000002',
                        'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                        'quantity': 5
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            it('it should receive 2 Damage 21003055', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-DAMAGED',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU880000003',
                        'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                        'quantity': 2
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });
            it('it should receive ZEU900000001 successful', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU900000001',
                        'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                        'quantity': 35
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU900000002 successful', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU900000002',
                        'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                        'quantity': 37
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

            it('it should receive ZEU900000003 successful', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001-DAMAGED',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU900000003',
                        'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                        'quantity': 8
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
            });

        });
    });
};