const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive 30 ZEU200000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
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

            it('it should receive 1 ZEU22000001 successfully', function (done) {
                // Pass
                request
                    .post('/item/receive')
                    .set('x-access-token', token)
                    .type('json')
                    .send({
                        'source_container_location': 'ID-180809-003',
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

                it('it should receive 80 ZEU222000001 successfully', function (done) {
                    // Pass
                    request
                        .post('/item/receive')
                        .set('x-access-token', token)
                        .type('json')
                        .send({
                            'source_container_location': 'ID-180809-001',
                            'source_container': 'MAX999',
                            'destination_container': 'ZEU222000001',
                            'material_id': '3d8bbb60-638c-4839-847a-3a20ed11daea',
                            'quantity': 80
                        })
                        .expect(200, function (err, result) {
                            chai.expect(result.body.data).to.have.property('items');
                            done();
                        });
                    });  
        });
};
