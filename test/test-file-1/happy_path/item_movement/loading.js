const expect = require('chai').expect;

module.exports = function (token, request) {

    describe('POST /item/load', function () {

        it('it should load ZEU700000002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "8aa7e29d-6980-4e51-bc68-22b08b72865c",
                    "sorted_quantity": 40,
                    "source_container": "ZEU700000002",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU700000002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU000000003 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
                    "sorted_quantity": 40,
                    "source_container": "ZEU000000003",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU000000003"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU000000004 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
                    "sorted_quantity": 40,
                    "source_container": "ZEU000000004",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU000000004"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU600000001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "72c19f17-ed10-4b51-a150-0b0b74496ff4",
                    "sorted_quantity": 40,
                    "source_container": "ZEU600000001",
                    "destination_container": "SS-ZEU-180815-2",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU600000001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU900000001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09",
                    "sorted_quantity": 40,
                    "source_container": "ZEU900000001",
                    "destination_container": "SS-ZEU-180815-3",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU900000001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU700000001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "8aa7e29d-6980-4e51-bc68-22b08b72865c",
                    "sorted_quantity": 40,
                    "source_container": "ZEU700000001",
                    "destination_container": "SS-ZEU-180815-4",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU700000001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU000000001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
                    "sorted_quantity": 40,
                    "source_container": "ZEU000000001",
                    "destination_container": "SS-ZEU-180815-4",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU000000001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU000000002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "e9dd8159-7ed5-4778-9723-7e98aa8fce9e",
                    "sorted_quantity": 40,
                    "source_container": "ZEU000000002",
                    "destination_container": "SS-ZEU-180815-4",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU000000002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU600000002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "72c19f17-ed10-4b51-a150-0b0b74496ff4",
                    "sorted_quantity": 40,
                    "source_container": "ZEU600000002",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU600000002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load ZEU900000002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 40,
                    "material_id": "c0b3ea8b-859e-40f5-8640-3bd6cfbc8f09",
                    "sorted_quantity": 40,
                    "source_container": "ZEU900000002",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "ZEU900000002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
                    "sorted_quantity": 10,
                    "source_container": "GRC-001",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-001 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 35,
                    "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
                    "sorted_quantity": 35,
                    "source_container": "GRC-001",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-001"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-004 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
                    "sorted_quantity": 10,
                    "source_container": "GRC-004",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-004"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-004 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 35,
                    "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
                    "sorted_quantity": 35,
                    "source_container": "GRC-004",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-004"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-003 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 8,
                    "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
                    "sorted_quantity": 8,
                    "source_container": "GRC-003",
                    "destination_container": "SS-ZEU-180815-1",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-003"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 5,
                    "material_id": "07ef3043-0ad0-40eb-95fa-1f83db6ce6fc",
                    "sorted_quantity": 5,
                    "source_container": "GRC-002",
                    "destination_container": "SS-ZEU-180815-2",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "18568205-3205-4c02-b0fb-0c204dd7cc46",
                    "sorted_quantity": 10,
                    "source_container": "GRC-002",
                    "destination_container": "SS-ZEU-180815-2",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-002 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "688368b7-adf3-4712-ae8d-2bca4e05eea8",
                    "sorted_quantity": 10,
                    "source_container": "GRC-002",
                    "destination_container": "SS-ZEU-180815-2",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-002"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-006 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "0a08a686-c4ac-43e9-a30e-4ef838c12e58",
                    "sorted_quantity": 10,
                    "source_container": "GRC-006",
                    "destination_container": "SS-ZEU-180815-3",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-006"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-006 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 35,
                    "material_id": "6403f377-de2b-44dd-b374-1c23157e5cfe",
                    "sorted_quantity": 35,
                    "source_container": "GRC-006",
                    "destination_container": "SS-ZEU-180815-3",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-006"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-006 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 8,
                    "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
                    "sorted_quantity": 8,
                    "source_container": "GRC-006",
                    "destination_container": "SS-ZEU-180815-3",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-006"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-007 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "18568205-3205-4c02-b0fb-0c204dd7cc46",
                    "sorted_quantity": 10,
                    "source_container": "GRC-007",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-007"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-007 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 10,
                    "material_id": "688368b7-adf3-4712-ae8d-2bca4e05eea8",
                    "sorted_quantity": 10,
                    "source_container": "GRC-007",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-007"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-005 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 5,
                    "material_id": "07ef3043-0ad0-40eb-95fa-1f83db6ce6fc",
                    "sorted_quantity": 5,
                    "source_container": "GRC-005",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-005"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

        it('it should load GRC-005 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 8,
                    "material_id": "b9903672-b8ca-4374-b2b3-897699dfb3d8",
                    "sorted_quantity": 8,
                    "source_container": "GRC-005",
                    "destination_container": "SS-ZEU-180815-5",
                    "destination_container_location": "MAX999",
                    "source_container_location": "GRC-005"
                })
                .end(function (err, result) {
                    expect(result.status).to.equal(200);
                    done();
                })
        });

    });

};