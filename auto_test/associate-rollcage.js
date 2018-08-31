const config = require('../config');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const async = require('async');
const moment = require('moment');


describe('Login user to get token', function () {
    it('should be successful', function (done) {
        request
            .post('/auth/login')
            .type('json')
            .set('Content-Type', 'application/json')
            .send({
                email: 'admin@cdi.com',
                password: 'secret'
            })
            .end(function (err, result) {
                token = result.header['x-access-token'];
                done();
            });
    });

});
// /grid-plan?container_type=rollcage&date=2018-08-16
// '/customer-secondaries/:id/allocated-grids


describe('ASSOCIATE ROLLCAGE: PUT /grid-plan/subgrid_id', function () {

    let items;

    let dateString = moment().add(1, 'days').format('YYYY-MM-DD');

    before('Get grid plan', function (done) {
        request
            .get('/grid-plan?container_type=rollcage&date=' + dateString)
            .set('x-access-token', token)
            .send()
            .expect(200, function (err, result) {
                if (err) {
                    throw err;
                }
                items =  result.body.data.items.filter((item, i) => {
                    if(item.customer_secondary_id){
                        return item;
                    }

                });
                done();
            });
    });

    it('should associate rollcage to subgrid', function (done) {

        items.forEach(function(item, i) {
            item.index = i+1;
        });
        
        async.eachSeries(items, assign, done);
        
        function assign(item, cb) {
            let  i = item.index.toString().padStart(3,'0');
            let rollcage = 'GRC-'+i;
            request
                .put('/grid-plan/'+item.grid)
                .set('x-access-token', token)
                .send({
                    'rollcage': rollcage
                })
                .expect(200, function (err, result) {
                    if (err) throw err;
                    console.log('    ✓ Successfully assigned', rollcage +' to', item.grid);
                    cb();
                });
        }
    });

});
