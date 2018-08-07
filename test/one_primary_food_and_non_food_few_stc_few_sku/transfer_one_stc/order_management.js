const chai = require('chai');
const expect = chai.expect;

module.exports = function(token, request) {
    // Use our prealert with:
    // 24 rows
    const filePath = '../prealert.csv';

    describe('POST /prealerts', function () {
        this.timeout(5000);
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
        let result;

        before('Fire http request', function (done) {
            request
            .get('/bookings?status=prealert')
            .set('Content-Type', 'multipart/form-data')
            .set('x-access-token', token)
            .send()
            .end(function(err, res) {
                result = res;
                done();
            });
        });
        
        it('should be successful', function () {
            expect(result.status).to.equal(200);
        });

        it('should contain the prealert we uploaded', function () {
            const rows = result.body.data.items;
            expect(rows.length).to.equal(1);
        });
    });
}
