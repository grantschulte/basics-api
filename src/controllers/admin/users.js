const { cleanUser } = require("../../utils").user;

let userData = [
  {
    id: 1,
    email: "admin@example.com",
    name: "Admin",
    password: "password",
    role: "admin"
  },
  {
    id: 2,
    email: "user@example.com",
    name: "User",
    password: "password",
    role: "user"
  }
];

const users = {
  getAll: function(req, res) {
    const all = userData.map(u => cleanUser(u));
    res.json(all);
  },

  getOne: function(req, res) {
    const id = req.params.id;
    const user = userData.find(u => u.id.toString() === id.toString());
    res.json(user);
  },

  create: function(req, res) {

  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  }
};

module.exports = users;
