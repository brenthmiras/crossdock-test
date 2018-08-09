const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU500000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU500000001',
                    'material_id': '688368b7-adf3-4712-ae8d-2bca4e05eea8',
                    'quantity': 20
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        it('it should receive 3 EXCESS 300797', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU500000002',
                    'material_id': '688368b7-adf3-4712-ae8d-2bca4e05eea8',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

    });
};
