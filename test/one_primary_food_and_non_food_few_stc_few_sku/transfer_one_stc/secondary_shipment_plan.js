const chai = require('chai');
const expect = chai.expect;

module.exports = function (token, request) {

    describe(`GET /shipment-secondary/recommendation`, function () {
        let result;

        before('Fire http request', function (done) {
            request
            .get('/shipment-secondary/recommendation')
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

        it('should contain 8 shipment recommendations', function () {
        	const recommendations = result.body.data.items;
        	expect(recommendations.length).to.equal(8);
        });

        it('should contain 3 food and 5 non food shipment recommendations', function () {
        	const recommendations = result.body.data.items;

        	const food 	   = recommendations.filter( r => r.category == 'FOOD');
        	const non_food = recommendations.filter( r => r.category == 'NON-FOOD');
        	
        	expect(food.length).to.equal(3);
        	expect(non_food.length).to.equal(5);
        })
    });
};