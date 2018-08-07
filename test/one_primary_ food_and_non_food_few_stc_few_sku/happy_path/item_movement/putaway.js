const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /inbound', function () {
        it('it should not be empty', function (done) {
            // Pass
            request
                .get('/inbound')
                .set('x-access-token', token)
                .expect(200, function (err, result) {

                    chai.expect(result.body.data).to.have.property('items');
                    chai.expect(result.body.data.items.length).to.be.greaterThan(0);

                    let counter = 0;
                    describe('POST /item/receive', function () {
                        result.body.data.items.forEach((v, i, a) => {

                            v.pallets.forEach((_v, _i, _a) => {
                                putaway(_v);
                            });
                            
                        });
                    });

                    done();
                });
        });
    });

};


function putaway(o) {
    let grid;
    it('it should get /materials/barcode/'+o.destination_container+' successfully', function (done) {

        request
            .get('/materials/barcode/' + o.destination_container)
            .set('x-access-token', token)
            .expect(200, function (err, result) {
                grid = result.body.data.items[0].staging_subgrid;
                done();
            });
                
    });

    it('it should putaway '+o.destination_container+' successfully', function (done) {
        request
            .post('/item/putaway')
            .set('x-access-token', token)
            .send({
                'source_container': o.destination_container,
                'destination_container_location': grid
            })
            .expect(200, function (err, result) {
                done();
            });

    });

};