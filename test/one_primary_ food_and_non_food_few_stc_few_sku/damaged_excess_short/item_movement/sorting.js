const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {


        it('it should sort ZEU700000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU700000001",
                    "destination_container": "GRC-006",
                    "quantity": 40,
                    "sku": "67106205",
                    "ship_to_code": "STC-000000531"
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });


    });
};