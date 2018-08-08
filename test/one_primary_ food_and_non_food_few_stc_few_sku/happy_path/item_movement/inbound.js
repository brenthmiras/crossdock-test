const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU000000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000001',
                    'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
                    'quantity': 18
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU000000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000002',
                    'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                    'quantity': 1
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
    

        it('it should receive ZEU000000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000003',
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
