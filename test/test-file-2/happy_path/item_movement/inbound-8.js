const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

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
                    'quantity': 7
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        
    });
};
