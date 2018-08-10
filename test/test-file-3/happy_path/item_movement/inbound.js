const chai = require('chai');

module.exports = function (token, request) {

// JF000898
// 616702
// 
    describe('POST /inbound', function () {
        
        //Inbound doc 1 
        it('it should receive ZEU000000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-001',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000001',
                    'material_id': 'faeaab5a-46c8-41a6-8c2f-861741426e47',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });


        //Inbound doc 2
        it('it should receive ZEU010000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000001',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000002',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000003',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000004 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-002',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000004',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
      

        //Inbound doc 3
        it('it should receive ZEU011000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': 'ID-180809-003',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU011000001',
                    'material_id': '6bd1b793-3aa0-4f58-b7ba-e401d5a545fb',
                    'quantity': 105
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        
        
    });
};
