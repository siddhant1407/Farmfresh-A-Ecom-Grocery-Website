const User = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");



exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB",
        error:err
      });
    }
    res.json({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      id: user._id
    });
  });
};



exports.signin = (req, res) => {

   const { email, password } = req.body;

 
   User.findOne({ email }, (err, user) => {
     if (err || !user) {
       return res.status(400).json({
         error: "USER email does not exists"
       });
     }
 
     if (!user.autheticate(password)) {
       return res.status(401).json({
         error: "Email and password do not match"
       });
     }
 
     const { _id, name, email } = user;
     return res.json({  user: { _id, name, email } });
   });
 };

 

exports.getUserById = (req, res, next, id) => {
    User.findById(id)
    .populate("user")
    .exec((err, user) => {
      if (err) {
        return res.status(400).json({
          error: "User not found in DB"
        });
      }
      req.user = user;
      next();
    });
  };

exports.deleteUser = (req, res) => {
       let user = req.user;
       user.remove((err, deleteUser) => {
          if (err) {
            return res.status(400).json({
              error: "Failed to delete this user"
            });
          }
          res.json({
            message: "Successfully removed",
            deleteUser
          });
        });
      };


exports.updateUser = (req, res) => {
    
        const user = req.user;
       
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.address = req.body.address;
        user.password = req.body.password;
      
        user.save((err, updatedUser) => {
          if (err) {
            return res.status(400).json({
              error: "Failed to update User"
            });
          }
          res.json(updatedUser);
        });
      };
