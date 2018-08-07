const chai = require('chai');
const expect = chai.expect;

module.exports = function(token, request) {

    const filePath = '../prealert.csv';

    describe('POST /prealerts', function () {
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

    describe('GET /bookings?status=prealert', function () {
        it('should be successful', function () {
            // Pass
        });
    });
}
