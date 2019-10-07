const ListGenerator = require('./ListGenerator');
const boards = require('../boards/boardsData');
const yesterdayLists = require('./yesterday');
const todayLists = require('./today');
const tomorrowLists = require('./tomorrow');

function findBoard (req) {
  let boardIndex = boards.findIndex(board => +req.params.boardId === +board.id);
  let noBoard = boardIndex === -1;
  if (noBoard) {
    return 'There is no board with such id.';
  } else if (boards[boardIndex].title === "Yesterday tasklist") {
    return yesterdayLists;
  } else if (boards[boardIndex].title === "Today tasklist") {
    return todayLists;
  } else if (boards[boardIndex].title === "Tomorrow tasklist") {
    return tomorrowLists;
  }
}

module.exports = {
  getAll: (req, res) => {
    let gottenLists = findBoard(req);
    res.send(gottenLists);
  },

  getOne: (req, res) => {
    let gottenLists = findBoard(req);

    if (typeof gottenLists === 'string') {
      res.send(gottenLists);
      return;
    }
    if (req.params.listId > gottenLists.length) {
      res.send('No list under such id exists.');
      return;
    }
    res.send(gottenLists[req.params.listId - 1]);
  },

  add:  (req, res) => {
    let gottenLists = findBoard(req);
    let listIndex = gottenLists.findIndex(list => +req.params.listId === +list.id);
    let noList = listIndex === -1;
    
    if (noList) {
      let newItemNumber = gottenLists.length + 1;  
      let newListInstance = ListGenerator(newItemNumber); 

      gottenLists.push(newListInstance);
      res.send(newListInstance);
    }
    else {
      res.send("Such list already exists");
    }
  },

  change: (req, res) => {
    let gottenLists = findBoard(req);

    if (typeof gottenLists === 'string') {
      res.send(gottenLists);
      return;
    }

    let listIndex = gottenLists.findIndex(list => +req.params.listId === +list.id);

    if (req.params.listId > gottenLists.length) {
      res.send('No list under such id exists.');
      return;
    }

    gottenLists[listIndex]["title"] = "Insanely hard tasks";
    res.send(gottenLists[listIndex]);
    return;
  },

  delete: (req, res) => {
    let gottenLists = findBoard(req);

    if (typeof gottenLists === 'string') {
      res.send(gottenLists);
      return;
    }

    let listIndex = gottenLists.findIndex(list => +req.params.listId === +list.id);
    let noList = listIndex === -1;

    if (!noList) {
      res.send(gottenLists[listIndex]);
      gottenLists.splice(listIndex, 1);
    } else {
      res.send("No board exists");
    }
  }
};  