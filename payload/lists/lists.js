const ListGenerator = require('../../functions/ListGenerator');
const findBoard = require('../../functions/findBoard');

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
    let newItemNumber = gottenLists.length + 1;
    let boardId = req.params.boardId;
    let i = -1, noList, newListInstance, savedItem, end;
    
    do {
      i++;
      end = gottenLists.length;

      newListInstance = ListGenerator(newItemNumber, boardId, i);
      if (!newListInstance.order) {
        break;
      }

      let listIndex = gottenLists.findIndex(item => item.order === newListInstance.order);
      noList = listIndex === -1;
      
      if (newListInstance.order) {
        savedItem = newListInstance;
      }

    } while (i < end && !noList);

    if (noList && savedItem) {
      gottenLists.push(savedItem);
      res.send(savedItem);
    } else {
      res.send('Such tasklist already exists');
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

    gottenLists[listIndex]["description"] = "Should be done till Monday";
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
      res.send("Such list doesn't exists");
    }
  }
};  