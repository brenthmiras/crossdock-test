const chai = require('chai');
const expect = chai.expect;

module.exports = function(token, request) {

    const filePath = '../prealert.csv';

    describe('POST /prealerts', function () {
        this.timeout(20000);
        it('should be successful', function (done) {
            request
            .post('/prealerts')
            .set('Content-Type', 'multipart/form-data')
            .set('x-access-token', token)
            .field('override', 'true')
            .attach('file', filePath)
            .end(function(err, res) {
                expect(res.status).to.equal(200);
                done();
            });
        });
    });

    describe('POST /postalerts', function () {
        this.timeout(20000);
        it('should be successful', function (done) {
            request
            .post('/bookings/ZEU-ULP-180807-001/postalerts')
            .set('Content-Type', 'multipart/form-data')
            .set('x-access-token', token)
            .field('override', 'true')
            .attach('file', '../ZEU-ULP-180807-001.csv')
            .end(function(err, res) {
                expect(res.status).to.equal(200);
                done();
            });
        });
    });

    describe('GET /bookings?status=prealert', function () {
        it('should be successful', function () {
            // Pass
        });
    });


    
}