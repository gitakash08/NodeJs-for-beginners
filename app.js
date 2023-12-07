
const express = require("express");
const mssql = require('mssql');
const dotenv = require("dotenv");
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.options('*', cors());


let result = dotenv.config();
if (result.error) {
    throw result.error;
}

const config = {
    port: parseInt(process.env.db_port),
    server: process.env.db_server,
    user: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    options: {
        encrypt: true, // For Windows Azure
        trustServerCertificate: true, // Change to true for local dev/test
    },
}
const pool = mssql.connect(config)

if (pool) {
    console.log('Connected to database');
} else {
    console.log('is not Connected to database');
}


// create globle varialbe
global.db = mssql;
global.config = config;
global.request = request;

//add bodyparser is a middleware for limits
app.use(bodyParser.json({ limit: "2048mb" }));
app.use(bodyParser.urlencoded({ limit: "2048mb", extended: true }));
app.use(bodyParser.json());

const { sum, displayName } = require('./messageApi/content');
const { welcome, getCensusData } = require('./CalculationApi/calc');

app.get('/welcome', welcome);
app.get('/SUM', sum);
app.get('/displayName', displayName);
app.get('/getCensusData', getCensusData);


const PORT = process.env.server_port
app.listen(PORT, function () {
    console.log(`server started at localhost:${PORT}`);
})