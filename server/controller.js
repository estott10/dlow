module.exports= {

    getProfiles: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {userid} = req.params;

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
         .then(user => {
             req.session.user = user;
             res.status(200).send({isSuccessful: true})
         }).then((response) => {
             if(response){
                 res.send(response)
             }
         })
   }
}