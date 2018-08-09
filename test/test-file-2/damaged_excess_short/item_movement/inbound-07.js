const chai = require('chai');

module.exports = function (token, request) {
//20046526
    describe('GET /inbound', function () {

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
        

    });
};
