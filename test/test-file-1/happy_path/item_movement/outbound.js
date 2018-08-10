module.exports = function (token, request) {

    describe('POST /item/transport', function () {

        it('it should transport GSRT-A01-07 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-1",
                    "grid_id": "GSRT-A01-07",
                    "customer_secondary_id": "SCC-004528",
                    "source_container": "GRC-038",
                    "destination_container": "GRC-038",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-06 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-1",
                    "grid_id": "GSRT-A01-06",
                    "customer_secondary_id": "SCC-004569",
                    "source_container": "GRC-039",
                    "destination_container": "GRC-039",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-05 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-1",
                    "grid_id": "GSRT-A01-05",
                    "customer_secondary_id": "SCC-005619",
                    "source_container": "GRC-003",
                    "destination_container": "GRC-003",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A02-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-1",
                    "grid_id": "ZEU-A02-02",
                    "customer_secondary_id": "SCC-005619",
                    "source_container": "ZEU-A02-02",
                    "destination_container": "ZEU-A02-02",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A03-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-1",
                    "grid_id": "ZEU-A03-02",
                    "customer_secondary_id": "SCC-005619",
                    "source_container": "ZEU-A03-02",
                    "destination_container": "ZEU-A03-02",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-08 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-2",
                    "grid_id": "GSRT-A01-08",
                    "customer_secondary_id": "SCC-004025",
                    "source_container": "GRC-036",
                    "destination_container": "GRC-036",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A05-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-2",
                    "grid_id": "ZEU-A05-02",
                    "customer_secondary_id": "SCC-004025",
                    "source_container": "ZEU-A05-02",
                    "destination_container": "ZEU-A05-02",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-04 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-3",
                    "grid_id": "GSRT-A01-04",
                    "customer_secondary_id": "SCC-004026",
                    "source_container": "GRC-006",
                    "destination_container": "GRC-006",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A02-01 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-3",
                    "grid_id": "ZEU-A02-01",
                    "customer_secondary_id": "SCC-004026",
                    "source_container": "ZEU-A02-01",
                    "destination_container": "ZEU-A02-01",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A04-01 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-4",
                    "grid_id": "ZEU-A04-01",
                    "customer_secondary_id": "SCC-004030",
                    "source_container": "ZEU-A04-01",
                    "destination_container": "ZEU-A04-01",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A04-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-4",
                    "grid_id": "ZEU-A04-02",
                    "customer_secondary_id": "SCC-004030",
                    "source_container": "ZEU-A04-02",
                    "destination_container": "ZEU-A04-02",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-5",
                    "grid_id": "GSRT-A01-02",
                    "customer_secondary_id": "SCC-004267",
                    "source_container": "GRC-030",
                    "destination_container": "GRC-030",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport ZEU-A01-02 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-5",
                    "grid_id": "ZEU-A01-02",
                    "customer_secondary_id": "SCC-004267",
                    "source_container": "ZEU-A01-02",
                    "destination_container": "ZEU-A01-02",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });
        
        
        it('it should transport GSRT-A01-01 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-5",
                    "grid_id": "GSRT-A01-01",
                    "customer_secondary_id": "SCC-004374",
                    "source_container": "GRC-016",
                    "destination_container": "GRC-016",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });

        
        it('it should transport ZEU-A01-01 successfully', function (done) {
            request
                .post('/item/transport')
                .set('x-access-token', token)
                .send({
                    "shipment_id": "SS-ZEU-180812-5",
                    "grid_id": "ZEU-A01-01",
                    "customer_secondary_id": "SCC-004374",
                    "source_container": "ZEU-A01-01",
                    "destination_container": "ZEU-A01-01",
                    "destination_container_location": "DOCK-01"
                })
                .expect(200, function (err, result) {
                    done();
                })
        });        

    });
};