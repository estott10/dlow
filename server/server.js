require('dotenv').config();

const express = require('express'),
      bodyParser= require('body-parser'),
      cors= require('cors'),
      massive= require('massive'),
      sessions= require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const port = 4000;



app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
} );

