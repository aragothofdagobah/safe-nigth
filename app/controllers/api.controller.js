const User = require('../models/user');

module.exports = {

  getAllUsers: (req, res) => {
    User.find({}, (err, user) => {
      if(err) {res.send(err)}
      console.log('blah');
      res.json(user);
    });
  },

  createUser: (req, res) => {
    var newUser = new User();
    newUser.first_name = req.params.fn;
    newUser.last_name  = req.params.ln;
    newUser.email      = req.params.em;
    newUser.password   = req.params.pw;
    newUser.save((err, user) => {
      if(err){res.send(err)}
      console.log(newUser.first_name + ' Created');
      res.json(user);
      mongoose.connection.close();
    });
  },

  readUser: (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
      if(err){res.send(err)}
      res.json(user)
    });
  },

  updateUser: (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, user) => {
      if(err){res.send(err)}
      res.json(user);
    });
  },

  removeUser: (req, res) => {
    User.remove({_id: req.params.id}, (err, user) => {
      if(err){res.send(err)}
      res.json("User was succesfully deleted");
    });
  }
}
