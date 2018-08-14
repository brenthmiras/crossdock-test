module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        
        it('it should putaway ZEU110000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU110000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
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
                    if (err) throw err;
                    done();
                });

        });

        it('it should putaway ZEU010000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU010000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });
        
        it('it should putaway ZEU990000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });

        it('it should putaway ZEU990000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000002',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });

        it('it should putaway ZEU990000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000003',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });
    });
};