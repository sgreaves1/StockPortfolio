const request = require('request-promise');
const https = require('https');

const iexcloudKey = 'xxxxx';
const url = "https://cloud.iexapis.com";

async function getDividends(symbol) {
    try {
        let options = {
            uri: `${url}/stable/stocks/${symbol}/dividends/5y?token=${iexcloudKey}`,
            json: true
        };

        return request(options);
    }
    catch (error) {
        console.log(`Error finding dividend for ${symbol}, iexCloud`);
        console.log(error);
    }
}

module.exports = {getDividends};