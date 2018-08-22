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
        },
        {
            title: 'SCJ PRE ALERT JUNE 20_v2 (actual file)',
            path: '../prealerts/SCJ_PRE_ALERT_JUNE_20_v2.csv'
        },
        {
            title: 'ZEU-ULP-180727-003 (actual file)',
            path: '../prealerts/ZEU-ULP-180727-003.csv'
        },
        {
            title: 'ZEU-ULP-180727-004(actual file)',
            path: '../prealerts/ZEU-ULP-180727-004.csv'
        },
        {
            title: 'ZEU-ULP-180727-005 (actual file)',
            path: '../prealerts/ZEU-ULP-180727-005.csv'
        },
        {
            title: 'RFM-SM (actual file)',
            path: '../prealerts/RFM-SM.csv'
        },
        {
            title: 'RFM-NON-SM (actual file)',
            path: '../prealerts/RFM-NON-SM.csv'
        }
    ]
};
