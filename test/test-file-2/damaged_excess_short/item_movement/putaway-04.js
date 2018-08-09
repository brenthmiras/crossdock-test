const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        it('it should putaway ZEU440000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU440000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU440000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU440000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway 2 Damaged 20046527 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU440000003',
                    'destination_container_location': 'DAMAGED'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });


        // it('it should putaway ZEU400000003 successfully', function (done) {
        //     request
        //         .post('/item/putaway')
        //         .set('x-access-token', token)
        //         .send({
        //             'source_container': 'ZEU400000003',
        //             'destination_container_location': 'GSTG-A01'
        //         })
        //         .expect(200, function (err, result) {
        //             done();
        //         });

        // });
    });
};
