const chai = require('chai');

module.exports = function (token, request) {

    describe('GET /customer-primaries/:id/shipments', function () {
        
        ///////////////////////////////
        /// ZEU300000001 - 2 items ////
        ///////////////////////////////
        it('it should sort ZEU300000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU300000001",
                    "destination_container": "GRC-030",
                    "quantity": 10
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        
        it('it should sort ZEU300000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU300000001",
                    "destination_container": "GRC-003",
                    "quantity": 10
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });



        ///////////////////////////////
        /// ZEU330000001 - 3 items ////
        ///////////////////////////////
        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-021",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-034",
                    "quantity": 3
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
        it('it should sort ZEU330000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU330000001",
                    "destination_container": "GRC-000",
                    "quantity": 6
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        ///////////////////////////////
        /// ZEU333000001 - 2 items ////
        ///////////////////////////////
        it('it should sort ZEU333000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU333000001",
                    "destination_container": "GRC-032",
                    "quantity": 5
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });

        it('it should sort ZEU333000001 successfully', function (done) {

            request
                .post('/item/sort')
                .set('x-access-token', token)
                .send({
                    "source_container": "ZEU333000001",
                    "destination_container": "GRC-002",
                    "quantity": 10
                })
                .expect(200, function (err, result) {
                    
                    done();
                });

        });
    });
};