const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /item/putaway', function () {
        
        it('it should putaway ZEU100000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU100000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU110000001 successfully', function (done) {
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

        it('it should putaway ZEU111000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU111000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

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

        it('it should putaway ZEU333000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU333000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should putaway ZEU300000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU300000001',
                    'destination_container_location': 'GSTG-A01'
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

        it('it should putaway ZEU400000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU400000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });


        it('it should putaway ZEU400000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU400000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU400000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU400000003',
                    'destination_container_location': 'GSTG-A01'
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

        it('it should putaway ZEU444000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU444000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

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

        it('it should putaway ZEU555000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU555000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

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

        it('it should putaway ZEU700000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU700000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should putaway ZEU700000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU700000002',
                    'destination_container_location': 'GSTG-A01'
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

        it('it should putaway ZEU777000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU777000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should putaway ZEU888000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU888000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU800000001 successfully', function (done) {
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

        // Second test file
        it('it should putaway ZEU990000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU990000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
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
                    done();
                });
        });

        // Third test file
        it('it should putaway ZEU999000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU999000001',
                    'destination_container_location': 'GSTG-B01'
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
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        // Inbound doc 2
        it('it should putaway ZEU010000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU010000001',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU010000002 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU010000002',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU010000003 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU010000003',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

        it('it should putaway ZEU010000004 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU010000004',
                    'destination_container_location': 'GSTG-A01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });
        // Inbound doc 3
        it('it should putaway ZEU011000001 successfully', function (done) {
            request
                .post('/item/putaway')
                .set('x-access-token', token)
                .send({
                    'source_container': 'ZEU011000001',
                    'destination_container_location': 'GSTG-B01'
                })
                .expect(200, function (err, result) {
                    done();
                });

        });

    });
};
