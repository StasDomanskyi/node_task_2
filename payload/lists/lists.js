const ListGenerator = require('./ListGenerator');
const yesterdayLists = require('./yesterday');
const todayLists = require('./today');
const tomorrowLists = require('./tomorrow');

module.exports = {
  getAll: (req, res, when) => {
    
    res.send(lists);
  },

  getOne: (req, res) => {
    if (req.params.id > lists.length) {
      res.send('No list under such id exists.');
    }

    res.send(lists[req.params.id - 1]);
  },

  add:  (req, res) => {
    let boardIndex = boards.findIndex(board => +req.params.id === +board.id);
    let noBoard = boardIndex === -1;
    
    if (noBoard) {
      let newItemNumber = boards.length + 1;  
      let newBoardInstance = Board(newItemNumber); 

      
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
    console.log(noBoard);
  
    if (!noBoard) {
      boards[boardIndex]["title"] = "Important Tasks";
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