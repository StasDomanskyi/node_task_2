const newBoard = {
  "id": 4,
  "title": "Easy tasks"
};

const boards = [
  {
    "id": 1,
    "title": "Yesterday tasks",
  },
  {
    "id": 2,
    "title": "Today tasks"
  },
  {
    "id": 3,
    "title": "Tomorrow tasks"
  }
]; 

  module.exports = {
    getAll: (req, res) => {
      res.send(boards);
    },
  
    getOne: (req, res) => {
      if (req.params.id > boards.length) {
        res.send('No board under such id exists.');
      }

      res.send(boards[req.params.id - 1]);
    },
  
    add:  (req, res) => {
      let boardIndex = boards.findIndex(board => +req.params.id === +board.id);
      let noBoard = boardIndex === -1;
      
      if (noBoard) {
        newBoard["id"] = boards.length + 1;
        users.push(newBoard);
        res.send(newBoard);
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