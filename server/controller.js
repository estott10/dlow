module.exports= {

    getProfiles: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {userid} = req.params;
        
        dbInstance.get_VehicleProfiles(userid)
          .then(result => {
              console.log(userid);
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
             req.session.user = response;
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
    
    dbInstance.register_User(username, email, address, profile_pic, password)
      .then(response => {
          console.log(response);
          req.session.user = response;
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
        }
}