const chai = require('chai');
//
module.exports = function (token, request) {

    describe('GET /inbound', function () {

        //08-08-1
        //616704
        it('it should receive ZEU700000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000001',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU700000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000002',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        //08-09-1
        //20046526
        it('it should receive ZEU770000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-003',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU770000001',
                    'material_id': 'd1650e4a-058d-4896-9794-337cd4ab05a1',
                    'quantity': 12
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
        
        //08-09-2
        //JF000913
        it('it should receive ZEU777000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU777000001',
                    'material_id': 'b404acdd-a0b8-4adc-80c4-5f6dccf53573',
                    'quantity': 9
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
    });
};
