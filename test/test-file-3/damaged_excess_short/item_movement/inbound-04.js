const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {
        it('it should receive ZEU400000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000001',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU400000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000002',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU400000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000003',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 21
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
                    'source_container_location': 'ID-180810-003',
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
                    'source_container_location': 'ID-180810-003',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU440000002',
                    'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                    'quantity': 28
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU444000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU444000001',
                    'material_id': '54de9ec3-7f33-469f-9b47-e517cb2796ad',
                    'quantity': 23
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
    });
};
