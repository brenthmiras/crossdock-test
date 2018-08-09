const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU880000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU800000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        it('it should putaway ZEU880000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU800000002',
                    'destination_container_location': 'EXCESS'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
    });
};
