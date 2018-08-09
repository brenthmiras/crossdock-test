const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU660000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU660000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should putaway 7 excess 21066581', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU660000002',
                    'destination_container_location': 'EXCESS'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};
