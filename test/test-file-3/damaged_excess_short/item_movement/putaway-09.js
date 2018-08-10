const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {

        // First test file
        it('it should putaway ZEU900000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU900000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should putaway ZEU900000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU900000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        // Second test file
        it('it should putaway ZEU990000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should putaway ZEU990000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000002',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should putaway ZEU990000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000003',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should putaway ZEU990000004 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000004',
                    'destination_container_location': 'DAMAGED'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        // Third test file
        it('it should putaway ZEU999000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU999000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should putaway ZEU999000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU999000002',
                    'destination_container_location': 'DAMAGED'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        
    });
};
