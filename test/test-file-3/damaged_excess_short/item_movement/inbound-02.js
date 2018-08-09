const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU200000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU200000001',
                    'material_id': '0a08a686-c4ac-43e9-a30e-4ef838c12e58',
                    'quantity': 30
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
            });  

            it('it should receive 5 excess ZEU200000002 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180808-001-EXCESS',
                        'source_container': 'MAX999',
                        'destination_container': 'ZEU200000002',
                        'material_id': '0a08a686-c4ac-43e9-a30e-4ef838c12e58',
                        'quantity': 5
                    })
                    .expect(200, function (err, result) {
                        chai.expect(result.body.data).to.have.property('items');
                        done();
                    });
                });  
        });
};
