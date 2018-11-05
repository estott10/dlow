require('dotenv').config();

const express = require('express'),
      bodyParser= require('body-parser'),
      cors= require('cors'),
      massive= require('massive'),
      session= require('express-session');
      

const app = express();
const controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    name: 'dlow',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 1 * 24 *60 *10 * 1000,
    }
}))

// app.use((req, res, next) => {
//     console.log(req.session.user);
//     next()
// })

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/profiles/:userid', controller.getProfiles)
app.post('/api/login', controller.loginUser)
app.get('/api/single_profile_list/:make/:vehicle_type', controller.getVehicles)
app.post('/api/register', controller.registerUser)
app.post('/api/newprofile', controller.addProfile)

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
} );

