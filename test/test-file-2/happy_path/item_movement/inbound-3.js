const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

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
    });
};
