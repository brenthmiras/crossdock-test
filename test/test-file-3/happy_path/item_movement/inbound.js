const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {

        let dateString = new Date().toISOString().split('T')[0].split('-').join('');
       let idn1 = 'ID-'+ dateString.substring(2)+ '-001';
       let idn2 = 'ID-'+ dateString.substring(2)+ '-002';
       let idn3 = 'ID-'+ dateString.substring(2)+ '-003';

        it('it should receive ZEU100000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU100000001',
                    'material_id': '07ef3043-0ad0-40eb-95fa-1f83db6ce6fc',
                    'quantity': 10
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU110000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU110000001',
                    'material_id': '27877c42-cf06-4407-96e1-3d3aa4a44ef2',
                    'quantity': 18
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU111000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU111000001',
                    'material_id': '2db9a94c-e976-4300-8694-314acb96bec4',
                    'quantity': 9
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive 30 ZEU200000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU200000001',
                    'material_id': '0a08a686-c4ac-43e9-a30e-4ef838c12e58',
                    'quantity': 30
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });  

        it('it should receive 1 ZEU22000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU220000001',
                    'material_id': '4b1c51e8-6420-4e3e-a361-444e44114fbd',
                    'quantity': 1
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });  

        it('it should receive 80 ZEU222000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU222000001',
                    'material_id': '3d8bbb60-638c-4839-847a-3a20ed11daea',
                    'quantity': 80
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        }); 

        it('it should receive ZEU333000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU333000001',
                    'material_id': '3f7ed6e2-87c4-417c-b4b5-1e6e515acb92',
                    'quantity': 15
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU300000001',
                    'material_id': '18568205-3205-4c02-b0fb-0c204dd7cc46',
                    'quantity': 20 
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU330000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU330000001',
                    'material_id': '90c8c84b-f5dc-46b3-8db7-ccfd1ba5bbc6',
                    'quantity': 14 
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000001',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000002',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU400000003',
                    'material_id': '6403f377-de2b-44dd-b374-1c23157e5cfe',
                    'quantity': 25
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU440000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU440000001',
                    'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                    'quantity': 126
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU440000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU440000002',
                    'material_id': '92ac331c-6ea3-4c9c-ac6d-ffe6803fe987',
                    'quantity': 32
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU444000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU444000001',
                    'material_id': '54de9ec3-7f33-469f-9b47-e517cb2796ad',
                    'quantity': 27
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU500000000 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU500000001',
                    'material_id': '688368b7-adf3-4712-ae8d-2bca4e05eea8',
                    'quantity': 20
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU550000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU550000001',
                    'material_id': 'cc1c4bcd-cabb-4551-97c1-330100e0a625',
                    'quantity': 48
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU555000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU555000001',
                    'material_id': '5668377a-0355-421e-a16d-3dbff3de16a4',
                    'quantity': 58
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000001',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU600000002',
                    'material_id': '72c19f17-ed10-4b51-a150-0b0b74496ff4',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU660000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU660000001',
                    'material_id': 'cc28282f-a260-43e6-9275-4222d68bf674',
                    'quantity': 6
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU666000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU666000001',
                    'material_id': '8a637440-d213-4737-9da3-be269d91e7ae',
                    'quantity': 10
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000001',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU700000002',
                    'material_id': '8aa7e29d-6980-4e51-bc68-22b08b72865c',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU770000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU770000001',
                    'material_id': 'd1650e4a-058d-4896-9794-337cd4ab05a1',
                    'quantity': 12
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU777000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU777000001',
                    'material_id': 'b404acdd-a0b8-4adc-80c4-5f6dccf53573',
                    'quantity': 9
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU888000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU888000001',
                    'material_id': 'c6a0c480-f144-4730-99f4-01b74ea8e76c',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU800000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU800000001',
                    'material_id': 'b9903672-b8ca-4374-b2b3-897699dfb3d8',
                    'quantity': 24
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU880000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU880000001',
                    'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                    'quantity': 72
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU880000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU880000002',
                    'material_id': 'fabdacd7-dd8f-4cc2-9b00-56a95148ab22',
                    'quantity': 7
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU900000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU900000001',
                    'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU900000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU900000002',
                    'material_id': 'c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        // Second test file
        it('it should receive ZEU990000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU990000001',
                    'material_id': 'd20e1b31-02c5-498e-8a70-402c34a75a2d',
                    'quantity': 60
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU990000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU990000002',
                    'material_id': 'd20e1b31-02c5-498e-8a70-402c34a75a2d',
                    'quantity': 60
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU990000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU990000003',
                    'material_id': 'd20e1b31-02c5-498e-8a70-402c34a75a2d',
                    'quantity': 20
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });

        it('it should receive ZEU999000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU999000001',
                    'material_id': 'df4d5b38-d9b4-474b-bc0f-97c3cbe94817',
                    'quantity': 15
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
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
                    'source_container_location': idn1,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU000000001',
                    'material_id': 'faeaab5a-46c8-41a6-8c2f-861741426e47',
                    'quantity': 3
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });


        //Inbound doc 2
        it('it should receive ZEU010000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000001',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000002 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000002',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000003 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000003',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });

        it('it should receive ZEU010000004 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn2,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU010000004',
                    'material_id': 'e9dd8159-7ed5-4778-9723-7e98aa8fce9e',
                    'quantity': 40
                })
                .expect(200, function (err, result) {
                    done();
                });
        });
        
        //Inbound doc 3
        it('it should receive ZEU011000001 successfully', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': idn3,
                    'source_container': 'MAX999',
                    'destination_container': 'ZEU011000001',
                    'material_id': '6bd1b793-3aa0-4f58-b7ba-e401d5a545fb',
                    'quantity': 105
                })
                .expect(200, function (err, result) {
                    done();
                });
        });


    });
};
