module.exports= {

    getProfiles: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {userid} = req.params;
        
        console.log("===============");
        dbInstance.get_VehicleProfiles(userid)
          .then(result => {
              res.status(200).send(result)
          }).catch(err => {
              res.status(500).send({errorMessage:'Failed to Retrieve Vehicle Profiles'});
            console.log(err);
    })
  },
   loginUser: (req, res, next) => {
       const dbInstance = req.app.get('db');
       const {email, password} = req.body;
       
       dbInstance.login_User(email, password)
         .then(response => {
             console.log(response);
             req.session.user = req.body;
             res.status(200).send(response)
         }).then((response) => {
             if(response){
                 res.send(response)
             }
         })
   },
   registerUser: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {username, email, address, profile_pic, password} = req.body;
    console.log(profile_pic);
    dbInstance.register_User(username, email, address, profile_pic, password)
      .then(response => {
          console.log(response);
          req.session.user = req.body;
          res.status(200).send(response)
      }).then((response) => {
          if(response){
              res.send(response)
          }
      })
},

   getVehicles: (req, res, next) => {
        const {make, vehicle_type} = req.params;
        const axios = require('axios');
        console.log(make);
    
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/vehicletype/${vehicle_type}?format=json`)
            .then((response) => {
                res.status(200).send(response.data)
            }).catch(err => {
                res.status(500).send({ errorMessage: "failed to retrieve list of vehicles for this profile" });
                console.log(err)
            })
        },
    addProfile: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const { title, price, vehicle_type, manufacturers, mpg, userid} = req.body;
        console.log(req.body);
        dbInstance.add_VehicleProfile(title, price,	vehicle_type, manufacturers, mpg, userid)
            .then(response => {
                res.status(200).send(response);
            }).catch( err => {
                res.status(500).send( {errorMessage: 'Failed to Add Vehicle Profile'});
                console.log(err);
            })
    },
    removeProfile: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {profileId} = req.params;
        
        dbInstance.delete_VehicleProfile(profileId)
          .then(result => {
              console.log(profileId);
              res.status(200).send(result)
          }).catch(err => {
              res.status(500).send({errorMessage:'Failed to Remove Vehicle Profile'});
            console.log(err);
    })
  },

  editProfile: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { title, price, vehicle_type, manufacturers, userid, vehicle_profileid} = req.body;

    console.log(req.body);
    dbInstance.edit_VehicleProfile(title, price, vehicle_type, manufacturers, userid, vehicle_profileid)
        .then(response => {
            res.status(200).send(response);
        }).catch( err => {
            res.status(500).send( {errorMessage: 'Failed to Update Vehicle Profile'});
            console.log(err);
        })
  },
  getUserCarTypes: (req, res, next) => {
    const dbInstance = req.app.get('db');
    
    dbInstance.join_UserTypes()
      .then(result => {
          res.status(200).send(result)
      }).catch(err => {
          res.status(500).send({errorMessage:'Failed to Retrieve User Vehicle Types Matching Car'});
        console.log(err);
        })
    }
}