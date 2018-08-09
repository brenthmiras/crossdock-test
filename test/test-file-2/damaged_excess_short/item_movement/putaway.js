module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        it('should be successful', function () {
            // Pass

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
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
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
            
            it('it should putaway ZEU100000001 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU110000001',
                        'destination_container_location': 'GSTG-A01'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });

            });

            it('it should putaway excess ZEU110000002 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU110000002',
                        'destination_container_location': 'EXCESS'
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

            it('it should putaway 3 excess ZEU2200000002 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU220000002',
                        'destination_container_location': 'EXCESS'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            }); 
            
            it('it should putaway ZEU330000001 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU330000001',
                        'destination_container_location': 'GSTG-A01'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });

            });


            it('it should putaway 9 excess ZEU330000002', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU330000002',
                        'destination_container_location': 'EXCESS'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });

            });
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
            it('it should putaway 10 EXCESS 20062058', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU550000002',
                        'destination_container_location': 'EXCESS'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });

            });

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

            it('it should putaway ZEU770000001 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU770000001',
                        'destination_container_location': 'GSTG-A01'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            });
            it('it should putaway 3 excess 20046526', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU770000002',
                        'destination_container_location': 'EXCESS'
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

            it('it should putaway ZEU900000003 successfully', function (done) {
                request
                    .post('/item/putaway')
                    .set('x-access-token', token)
                    .send({
                        'source_container': 'ZEU900000003',
                        'destination_container_location': 'DAMAGED'
                    })
                    .expect(200, function (err, result) {
                        done();
                    });
            });

        });
    });
};