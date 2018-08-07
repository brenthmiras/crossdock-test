const config = require('../../../../config');
const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {
        it('it should not be empty', function (done) {
            // Pass
            request
                .get('/inbound')
                .set('x-access-token', token)
                .send({
                    "email": "admin@cdi.com",
                    "password": "secret"
                })
                .expect(200, function (err, result) {

                    chai.expect(result.body.data).to.have.property('items');
                    chai.expect(result.body.data.items.length).to.be.greaterThan(0);

                    let counter = 0;
                    describe('POST /item/receive', function () {
                        result.body.data.items.forEach((v, i, a) => {

                            if(v.quantity > v.pallet_max_case){
                                while (v.quantity >= v.pallet_max_case) {
                                    inbound(v.inbound_document_number, 'MAX999', 'ZEU' + ('' + (i + counter++)).padStart(9, '0'), v.material_id, v.pallet_max_case);
                                    v.quantity -= v.pallet_max_case;
                                }
                                if(v.quantity > 0){
                                    inbound(v.inbound_document_number, 'MAX999', 'ZEU' + ('' + (i + counter++)).padStart(9, '0'), v.material_id, v.quantity);
                                }
                            }else{
                                inbound(v.inbound_document_number, 'MAX999', 'ZEU' + ('' + (i+counter)).padStart(9, '0'), v.material_id, v.quantity);
                            }
                        });
                    });

                    done();
                });
        });
    });

};

function inbound(source_container_location, source_container, destination_container, material_id, quantity) {
        it('it should be successful', function (done) {
            // Pass
            request
                .post('/item/receive')
                .set('x-access-token', token)
                .type('json')
                .send({
                    'source_container_location': source_container_location,
                    'source_container': source_container,
                    'destination_container': destination_container,
                    'material_id': material_id,
                    'quantity': quantity
                })
                .expect(200, function (err, result) {
                    chai.expect(result.body.data).to.have.property('items');
                    done();
                });
        });
}
