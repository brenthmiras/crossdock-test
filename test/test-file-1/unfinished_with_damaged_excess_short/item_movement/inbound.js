const chai = require('chai');

module.exports = function (token, request) {

    describe('POST /inbound', function () {
        
        let dateString = new Date().toISOString().split('T')[0].split('-').join('');
        let idn = 'ID-'+ dateString.substring(2)+ '-001';

        it('it should receive ZEU100000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU100000001',
                    'material_id': '07ef3043-0ad0-40eb-95fa-1f83db6ce6fc',
                    'quantity': 10
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });
        it('it should receive 7 excess ZEU100000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU100000002',
                    'material_id': '07ef3043-0ad0-40eb-95fa-1f83db6ce6fc',
                    'quantity': 7
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU200000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU200000001',
                    'material_id': '0a08a686-c4ac-43e9-a30e-4ef838c12e58',
                    'quantity': 30
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive 5 excess ZEU200000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU200000002',
                    'material_id': '0a08a686-c4ac-43e9-a30e-4ef838c12e58',
                    'quantity': 5
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU300000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU300000001',
                    'material_id': '18568205-3205-4c02-b0fb-0c204dd7cc46',
                    'quantity': 20
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive 3 excess ZEU300000002', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU300000002',
                    'material_id': '18568205-3205-4c02-b0fb-0c204dd7cc46',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU400000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000001',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU400000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000002',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });


        it('it should receive ZEU400000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000003',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 25
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });
        

        it('it should receive ZEU500000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU500000001',
                    'material_id': '688368b7-adf3-4712-ae8d-2bca4e05eea8',
                    'quantity': 20
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });
        it('it should receive 3 EXCESS 300797', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU500000002',
                    'material_id': '688368b7-adf3-4712-ae8d-2bca4e05eea8',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU600000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000001',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });
        it('it should receive ZEU600000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000002',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 35
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive 5 damaged 300796', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000003',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 5
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU700000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000001',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU700000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000002',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 25
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });



        //uncomment to move data to yesterday and continue receiving today
        // it('it should simulate date -1', function (done) {
        //     request
        //        .post('/test/minus_one')
        //        .set('x-access-token', token)
        //        .send({
        //        })
        //        .expect(200, function (err, result) {
        //             dateString = (parseInt(dateString) - 1).toString();
        //             idn =  'ID-'+ dateString.substring(2)+ '-001';
        //             console.log('receiving inbound doc', idn);
        //            done();
        //        });
        // });



        it('it should receive 15 damaged 616704', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000003',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 15
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU80000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU800000001',
                    'material_id': 'b9903672-b8ca-4374-b2b3-897699dfb3d8',
                    'quantity': 24
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive  3 Excess 615999', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-EXCESS',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU800000002',
                    'material_id': 'b9903672-b8ca-4374-b2b3-897699dfb3d8',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU900000001 successful', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU900000001',
                    'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                    'quantity': 35
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU900000002 successful', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU900000002',
                    'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                    'quantity': 37
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU900000003 successful', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn+'-DAMAGED',
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU900000003',
                    'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                    'quantity': 8
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU000000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000001',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU000000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000002',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive ZEU000000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000003',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
        });

        it('it should receive 15 less qty ZEU000000004 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000004',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 25
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });
            });
    });
        
};
