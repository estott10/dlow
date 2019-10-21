require('dotenv').config();

const express = require('express'),
    //   path = require('path'),
      bodyParser= require('body-parser'),
      cors= require('cors'),
      path = require("path"),
      massive= require('massive'),
      session= require('express-session');
      

const app = express();
const controller = require('./server/controller');

// app.use(express.static(path.join(__dirname, '/build')));

// app.get('/*', (req, res) => {
//     res.sendFile('index.html', {   
//         root: path.join(_dirname + '/build') 
//     })
// } )

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

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
    console.log("DB Up and Running")
}).catch(err => console.log(err));

app.get('/api/profiles/:userid', controller.getProfiles);
app.post('/api/login', controller.loginUser);
app.get('/api/single_profile_list/:make/:vehicle_type', controller.getVehicles);
app.post('/api/register', controller.registerUser);
app.post('/api/newprofile', controller.addProfile);
app.delete('/api/vehicles/:profileId', controller.removeProfile); 
app.put('/api/editprofile', controller.editProfile);
app.get('/api/vehicletype', controller.getUserCarTypes);

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
} );

