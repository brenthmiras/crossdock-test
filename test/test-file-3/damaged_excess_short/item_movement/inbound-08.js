const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU888000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU888000001',
                    'material_id': 'c6a0c480-f144-4730-99f4-01b74ea8e76c',
                    'quantity': 1
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        it('it should receive 2 Damaged JF000896', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-001-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU888000002',
                    'material_id': 'c6a0c480-f144-4730-99f4-01b74ea8e76c',
                    'quantity': 2
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
////2nd
        it('it should receive ZEU800000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU800000001',
                    'material_id': 'b9903672-b8ca-4374-b2b3-897699dfb3d8',
                    'quantity': 24
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        ///3rd
        it('it should receive ZEU880000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-003',
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
       it('it should receive ZEU880000002 successfully', function (done) {
                    // Pass
                    request
                        .post('/item/receive')
                        .set('x-access-token', token)
                        .type('json')
                        .send({
                            'source_container_location': 'ID-180810-003',
                            'source_container': 'MAX999',
                            'destination_container': 'ZEU880000002',
                            'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                            'quantity': 4
                        })
                        .expect(200, function (err, result) {
                            chai.expect(result.body.data).to.have.property('items');
                            done();
                        });
                });
                it('it should receive 3 Damaged 21003055', function (done) {
                    // Pass
                    request
                        .post('/item/receive')
                        .set('x-access-token', token)
                        .type('json')
                        .send({
                            'source_container_location': 'ID-180810-003-DAMAGED',
                            'source_container': 'MAX999',
                            'destination_container': 'ZEU880000003',
                            'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                            'quantity': 3
                        })
                        .expect(200, function (err, result) {
                            chai.expect(result.body.data).to.have.property('items');
                            done();
                        });
                });
    });
};

