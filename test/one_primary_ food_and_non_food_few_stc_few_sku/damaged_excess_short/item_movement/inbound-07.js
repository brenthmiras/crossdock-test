const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU700000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000001',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU700000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000002',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 25
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU700000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000003',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 15
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

    });
};
