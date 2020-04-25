let express = require('express');
let bodyParser = require('body-parser');

let stocks = {stocks:
        [
            { name:  "NewRiver REIT", symbol: "NRR", quantity: 43},
            { name: "Pembina Pipeline", symbol: "PBA", quantity: 4},
            { name: "Barclays", symbol: "BARC", quantity: 12},
            { name: "Salesforce", symbol: "CRM", quantity: 0.06},
            { name: "Tencent Music Entertainment", symbol: "TME", quantity: 1},
        ]};


let app = express();

// Routes
const stockRoute = require('./routes/stocks');

app.use(express['static'](__dirname ));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/stock', stockRoute);

app.listen(3040);

console.log('App Server running at port 3040');






