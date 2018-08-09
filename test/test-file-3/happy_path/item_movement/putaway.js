const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
<<<<<<< Updated upstream
        it('it should putaway ZEU000000000 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000000',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000002 successfully', function (done) {
=======

        // First test file
        it('it should putaway ZEU900000001 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000003',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000004 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000004',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000005 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000005',
=======
                    'source_container': 'ZEU900000001',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000006 successfully', function (done) {
=======
        });
        it('it should putaway ZEU900000002 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000006',
=======
                    'source_container': 'ZEU900000002',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000007 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000007',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000008 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000008',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000009 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000009',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU000000010 successfully', function (done) {
=======
        });

        // Second test file
        it('it should putaway ZEU990000001 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000010',
=======
                    'source_container': 'ZEU990000001',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000011 successfully', function (done) {
=======
        });
        it('it should putaway ZEU990000002 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000011',
=======
                    'source_container': 'ZEU990000002',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000012 successfully', function (done) {
=======
        });
        it('it should putaway ZEU990000003 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000012',
=======
                    'source_container': 'ZEU990000003',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000013 successfully', function (done) {
=======
        });

        // Third test file
        it('it should putaway ZEU999000001 successfully', function (done) {
>>>>>>> Stashed changes
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
<<<<<<< Updated upstream
                    'source_container': 'ZEU000000013',
=======
                    'source_container': 'ZEU999000001',
>>>>>>> Stashed changes
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
<<<<<<< Updated upstream

        });


        it('it should putaway ZEU000000014 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU000000014',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });



=======
        });
>>>>>>> Stashed changes
    });
};
