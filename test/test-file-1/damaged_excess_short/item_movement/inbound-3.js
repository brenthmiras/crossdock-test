const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU300000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU300000001',
                    'material_id': '18568205-3205-4c02-b0fb-0c204dd7cc46',
                    'quantity': 20 
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive 3 excess ZEU300000002', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180808-001-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU300000002',
                    'material_id': '18568205-3205-4c02-b0fb-0c204dd7cc46',
                    'quantity': 3 
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
    
    });
};
