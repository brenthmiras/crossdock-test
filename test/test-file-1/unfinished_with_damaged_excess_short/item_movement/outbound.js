module.exports = function (token, request) {

    describe('POST /item/transport', function () {


        it('it should transport GSRT-A01-04 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180810-1",
                    "grid_id": "GSRT-A01-04",
                    "customer_secondary_id": "SCC-004113",
                    "source_container": "GSRT-A01-04",
                    "destination_container": "GSRT-A01-04",
                    "destination_container_location": "GSRT-A01-04"
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                 });

        });

    });
};