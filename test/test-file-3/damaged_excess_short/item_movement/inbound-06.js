const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {
        //KAHAPON
        it('it should receive ZEU600000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000001',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        it('it should receive ZEU600000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000002',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 35
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        it('it should receive 5 damaged 300796', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-002-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000003',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 5
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        // KANINA
        it('it should receive ZEU660000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-003',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU660000001',
                    'material_id': 'cc28282f-a260-43e6-9275-4222d68bf674',
                    'quantity': 6
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        // NGAYON 
        it('it should receive ZEU666000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU666000001',
                    'material_id': '8a637440-d213-4737-9da3-be269d91e7ae',
                    'quantity': 5
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive 5 damaged JF000889', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180810-001-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU666000002',
                    'material_id': '8a637440-d213-4737-9da3-be269d91e7ae',
                    'quantity': 5
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

    });
};