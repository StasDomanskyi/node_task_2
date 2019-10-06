let newUser = {
  "name": "Van",
  "fullName": "Van Burren",
  "email": "van-burren@gmail.com",
};
  
let users = [
  {
    "name": "John",
    "fullName": "Elton John",
    "email": "elt@gmail.com",
    "id": 1
  },
  {
    "name": "Ween",
    "fullName": "Meloween",
    "email": "meloween@gmail.com",
    "id": 2
  },
  {
    "name": "Johny",
    "fullName": "Cash",
    "email": "Johny_Cash@gmail.com",
    "id": 3
  }
];

module.exports = {
  getAll: (req, res) => {
    res.send(users);
  },

  getOne: (req, res) => {
    if (req.params.id > users.length) {
      res.send('No user under such id exists.');
    }
    
    res.send(users[req.params.id - 1]);
  },

  add:  (req, res) => {
    let userIndex = users.findIndex(user => +req.params.id === +user.id);
    let noUser = userIndex === -1;
    
    if (noUser) {
      newUser["id"] = users.length + 1;
      users.push(newUser);
      res.send(newUser);
    }
    else {
      res.send("Such user already exists");
    }
  },

  change: (req, res) => {
    let userIndex = users.findIndex(user => +req.params.id === +user.id);
    let noUser = userIndex === -1;

    if (!noUser) {
      users[userIndex].name = "Gary";
      res.send(users[userIndex]);
    } else {
      res.send("No user exists");
    }
  },

  delete: (req, res) => {
    let userIndex = users.findIndex(user => {
      return +req.params.id === +user.id;
    });

    let noUser = userIndex === -1;
    if (!noUser) {
      res.send(users[userIndex]);
      users.splice(userIndex, 1);
    } else {
      res.send("No user exists");
    }
  }
};
