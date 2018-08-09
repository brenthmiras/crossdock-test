const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU500000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU500000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        it('it should putaway 3 EXCESS 300797', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU500000002',
                    'destination_container_location': 'EXCESS'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
    });
};
