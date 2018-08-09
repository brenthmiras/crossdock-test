module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {

       it('it should sort ZEU000000001 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000001",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU000000002 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000002",
                    "destination_container": "ZEU-A04-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });
        });

        it('it should sort ZEU000000003 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000003",
                    "destination_container": "ZEU-A03-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU000000004 successfully', function (done) {
            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU000000004",
                    "destination_container": "ZEU-A03-02",
                    "quantity": 40
                })
                .expect(200, function (err, result) {
                    done();
             });
        });
    });
};