const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU200000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU200000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
            });

            it('it should putaway ZEU2200000001 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU220000001',
                        'destination_container_location': 'GSTG-B01'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
    
            });

            it('it should putaway ZEU222000001 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU222000001',
                        'destination_container_location': 'GSTG-B01'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
    
            });
    });
};
