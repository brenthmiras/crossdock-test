const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        it('it should receive ZEU100000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU100000001',
                    'material_id': '07ef3043-0ad0-40eb-95fa-1f83db6ce6fc',
                    'quantity': 10
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU110000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-003',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU110000001',
                    'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
                    'quantity': 18
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU111000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU111000001',
                    'material_id': '2db9a94c-e976-4300-8694-314acb96bec4',
                    'quantity': 9
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

    });
};
