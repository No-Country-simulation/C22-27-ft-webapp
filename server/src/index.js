const express = require('express');
const app = express();
const PORT = 3001;
const router =require('./routes/index')
const cookieParser = require("cookie-parser");

const {conn}=require('./db/DB_connection')
const {consulta}=require('./models/consultaModel')
const {patient}=require('./models/patientModel')
const {doctor}=require('./models/doctorModel')

app.listen(PORT, async () => {
    await conn.sync({force: false})
    console.log('Server OK in port: ' + PORT);
});



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

app.use(cookieParser());

app.use(express.json())

app.use('/healdtech',router)



