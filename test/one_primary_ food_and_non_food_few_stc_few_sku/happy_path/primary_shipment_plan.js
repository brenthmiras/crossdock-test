const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const config = require('../../../config');

module.exports = function (token, request) {

    describe('POST /customer-primaries/PCC-000614/shipments', function () {
        it('should confirm NON-FOOD PCC-000614 successfully', function (done) {
            // Pass
            request
                .post('/customer-primaries/PCC-000614/shipments')
                .set('x-access-token', token)
                .send([{
                    "truck_type": "4W REGULAR",
                    "quantity": 1,
                    "required_delivery_date": "2018-08-10",
                    "created_date": "2018-08-08",
                    "category": "NON-FOOD"
                }])
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });

        it('should confirm FOOD PCC-000614 successfully', function (done) {
            // Pass
            request
                .post('/customer-primaries/PCC-000614/shipments')
                .set('x-access-token', token)
                .send([{
                    "truck_type": "6W",
                    "quantity": 1,
                    "required_delivery_date": "2018-08-10",
                    "created_date": "2018-08-08",
                    "category": "FOOD"
                }])
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });

};