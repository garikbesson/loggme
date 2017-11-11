const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config/config.json');
const cors = require('cors');
const routes = require('./routes');


// Initialization of express application
const app = express();

// Using bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Allow requests from any origin
app.use(cors({ origin: '*' }));
// app.use(function (req, res, next) {
//
//     var oneof = false;
//     if (req.headers.origin) {
//         res.header('Access-Control-Allow-Origin', req.headers.origin);
//         res.header('Access-Control-Allow-Credentials', 'true');
//         oneof = true;
//     }
//     if (req.headers['access-control-request-method']) {
//         res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
//         oneof = true;
//     }
//     if (req.headers['access-control-request-headers']) {
//         res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
//         oneof = true;
//     }
//     if (oneof) {
//         res.header('Access-Control-Max-Age', 1);
//     }
//
//     // intercept OPTIONS method
//     if (oneof && req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

//Including router
app.use(routes);


app.listen(8080, () => {
    console.log(`Server is up and running on port ${config.serverPort}`);
});