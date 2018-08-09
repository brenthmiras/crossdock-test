const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU550000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU550000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
    });
};
