const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

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

        // it('it should receive ZEU000000000 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000000',
        //             'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
        //             'quantity': 18
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    
        // it('it should receive ZEU000000001 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000001',
        //             'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
        //             'quantity': 1
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000002 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000002',
        //             'material_id': '90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6',
        //             'quantity': 14
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000003 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000003',
        //             'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
        //             'quantity': 126
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000004 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000004',
        //             'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
        //             'quantity': 32
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000005 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000005',
        //             'material_id': 'b46c62de-2d8a-47e3-93cd-df195c85246d',
        //             'quantity': 56
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000006 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000006',
        //             'material_id': 'b46c62de-2d8a-47e3-93cd-df195c85246d',
        //             'quantity': 56
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000007 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000007',
        //             'material_id': 'b46c62de-2d8a-47e3-93cd-df195c85246d',
        //             'quantity': 28
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000008 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000008',
        //             'material_id': 'c0d54683-6f61-4182-a402-e8ca414b0a35',
        //             'quantity': 90
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000009 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000009',
        //             'material_id': 'c0d54683-6f61-4182-a402-e8ca414b0a35',
        //             'quantity': 15
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000010 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000010',
        //             'material_id': 'cc1c4bcd-cabb-4551-97c1-330100e0a625',
        //             'quantity': 48
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000011 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000011',
        //             'material_id': 'cc28282f-a260-43e6-9275-4222d68bf674',
        //             'quantity': 6
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000012 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000012',
        //             'material_id': 'd1650e4a-058d-4896-9794-337cd4ab05a1',
        //             'quantity': 12
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000013 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000013',
        //             'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
        //             'quantity': 72
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    

        // it('it should receive ZEU000000014 successfully', function (done) {
        //     // Pass
        //     request
        //         .post('/item/receive')
        //         .set('x-access-token', token)
        //         .type('json')
        //         .send({
        //             'source_container_location': 'ID-180808-001',
        //             'source_container': 'MAX999',
        //             'destination_container': 'ZEU000000014',
        //             'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
        //             'quantity': 7
        //         })
        //         .expect(200, function (err, result) {
        //             chai.expect(result.body.data).to.have.property('items');
        //             done();
        //         });
        // });
    });
};
