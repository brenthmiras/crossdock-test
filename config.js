module.exports = {
    BASE_URL: 'http://test.codedisruptors.com:8001',
    FILES: [
        {
            title: 'With 1 primary, few secondary, few sku (non-food only)',
            path: '../prealerts/prealert1.csv'
        },
        {
            title: 'RFM - Food only',
            path: '../prealerts/rfm_prealert.csv'
        },
        {
            title: 'ULP - Food and Non-Food',
            path: '../prealerts/ulp_prealert.csv'
        },
        {
            title: 'ULP - With two invoice per sku, same customer',
            path: '../prealerts/ULP-two-invoice-same-STC.csv'
        }
    ]
};