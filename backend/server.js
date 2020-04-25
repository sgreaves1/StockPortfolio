let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Routes
const stockRoute = require('./routes/stocks');

app.use(express['static'](__dirname ));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/stock', stockRoute);

app.listen(3040);

console.log('App Server running at port 3040');






