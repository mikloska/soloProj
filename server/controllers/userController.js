const {User} = require('../models/userModel')
// //initializing controller object
const userController = {}

userController.getUsers = (req, res, next) => {
  console.log('in getUser middleware')
  const {id} = res
    User.find({})
    .then((data, err) => {
        res.locals = data;
      // res.locals.topFive = data;
      console.log(data);
      return next();
    })
    .catch(err => console.log(err));
    return next();
}


// userController.addScore = (req, res, next) => {
//   const { score, name } = req.body;
//   console.log('in addScore')
//   const entry = {name, score}

//   User.create({name, score })
//     .then(next())
//     .catch(err=>console.log(err))
// };

userController.addScore = (req, res, next) => {
  const entry = new User(req.body);

  entry.save()
  .then(next())
  .catch(err=>console.log(err))
  };
  



module.exports = userController;