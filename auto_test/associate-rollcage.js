const config = require('../config');

const request = require('supertest')(config.BASE_URL);
const chai = require('chai');
const async = require('async');

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

    const dateObj = new Date();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const date = parseInt(('0' + dateObj.getDate()).slice(-2)) + 1;
    const year = dateObj.getFullYear();

    const dateString = [year, month, date].join('-');

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
        
        async.each(items, assign, done);
        
        function assign(item, cb) {
            let i =  (item.index <= 9) ? ('00'+ item.index.toString())  :'0'+ item.index.toString();
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
