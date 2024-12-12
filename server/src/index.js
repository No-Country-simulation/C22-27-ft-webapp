const express = require('express');
const app = express();
const PORT = 3001;
const router =require('./routes/index.js')
const cookieParser = require("cookie-parser");
const {seedAdmin} = require('./controllers/admin.controller.js')
const {conn}=require('./db/DB_connection.js')
const {swaggerDocs} = require('./swagger.js');
const cors = require("cors");

app.listen(PORT, async () => {
    await conn.sync({force: false});
    await seedAdmin()
    swaggerDocs(app, PORT);
    console.log('Server OK in port: ' + PORT);
});

const corsOptions = {
    origin: 'http://localhost:5173',  
    credentials: true,               
  };
  
  app.use(cors(corsOptions));

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

app.use(express.json());

app.use('/healdtech',router);



