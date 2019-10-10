const BoardGenerator = require('../../functions/BoardGenerator');
const boards = require('./boardsData');

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
      let newItemNumber = boards.length + 1;  
      let newBoardInstance = BoardGenerator(newItemNumber); 

      
      boards.push(newBoardInstance);
      res.send(newBoardInstance);
    }
    else {
      res.send("Such user already exists");
    }
  },

  change: (req, res) => {
    let boardIndex = boards.findIndex(board => +req.params.id === +board.id);
    let noBoard = boardIndex === -1;
  
    if (!noBoard) {
      boards[boardIndex]["description"] = "Extremely important Tasks";
      res.send(boards[boardIndex]);
    }
    else {
      res.send("There is no such board");
    }
  },

  delete: (req, res) => {
    let boardIndex = boards.findIndex(board => {
      return +req.params.id === +board.id;
    });

    let noBoard = boardIndex === -1;
    if (!noBoard) {
      res.send(boards[boardIndex]);
      boards.splice(boardIndex, 1);
    } else {
      res.send("No board exists");
    }
  }
};  