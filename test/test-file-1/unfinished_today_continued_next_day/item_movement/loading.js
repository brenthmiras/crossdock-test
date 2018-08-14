module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

        it('it should load GSRT-A01-04 successfully', function (done) {
            request
                .post('/item/load')
                .set('x-access-token', token)
                .send({
                    "quantity": 1,
                    "material_id": "27877c42-cf06-4407-96e1-3d3aa4a44ef2",
                    "source_container": "GSRT-A01-04",
                    "destination_container": "SS-ZEU-180809-1",
                    "destination_container_location": "MAX999",
                    "sorted_quantity": 1,
                    "source_container_location": "GSRT-A01-04"
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    done();
                });

        });

    });
};