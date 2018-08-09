const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        //KAHAPON

        it('it should putaway ZEU600000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU600000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        it('it should putaway ZEU600000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU600000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        // KANINA
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
        // NGAYON
        it('it should putaway ZEU666000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU666000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
    });
};
