const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU880000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU880000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        it('it should putaway ZEU880000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU880000002',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        it('it should putaway ZEU880000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU880000003',
                    'destination_container_location': 'DAMAGED'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
    });
};

//New = 21003055