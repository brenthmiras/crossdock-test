const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

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

    });
};
