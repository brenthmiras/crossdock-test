const chai = require('chai');
const expect = chai.expect;

module.exports = function (token, request) {
    describe('GET /shipment-primary/recommendation', function () {
        let result;

        before('Fire http request', function (done) {
            request
            .get('/shipment-primary/recommendation')
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

        it('should contain 5 recommendations', function () {
            const rows = result.body.data.items;
            expect(rows.length).to.equal(5);
        });
    });
};