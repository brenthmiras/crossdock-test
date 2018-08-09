const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive 1 ZEU220000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU220000001',
                    'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                    'quantity': 1
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
            });  

            it('it should receive 3 excess ZEU220000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU220000002',
                        'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                        'quantity': 3
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
                });
        });
};
