const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU80000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
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
        it('it should receive  3 Excess 615999', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU800000002',
                    'material_id': 'b9903672-b8ca-4374-b2b3-897699dfb3d8',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        
    });
};
