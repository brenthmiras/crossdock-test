const chai = require('chai');
const chaiHttp = require("chai-http");
const {readFileSync} = require("fs");

module.exports = function(token, request) {

    chai.use(chaiHttp);

    describe('POST /prealert', function () {
        it('File upload in prealert', function () { 
            // request
            //     .post('/prealerts')
            //     .attach('file', './prealert.csv', 'prealert.csv')
            //     .set('Content-Type', 'text/csv')
            //     .set({'Content-Disposition': 'form-data', 'name': 'file', 'filename': 'prealert.csv'})
            //     .set('x-access-token', token)
            //     .expect(200)
            //     .end((err, res) => {
            //         if(err) {
            //             console.log(err);
            //         }
            //         console.log(res.body.data);
            //         done();
            //     });
        });
    });

    // describe('GET /bookings?status=prealert', function () {
    //     it('should be successful', function () {
    //         // Pass
    //     });
    // });
}

