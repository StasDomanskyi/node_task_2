const verbs = require('../payload/tasks/verbs');
const boards = require('../payload/boards/boardsData');
const users = require('../payload/users/usersData');
const ordersArray = require('../payload/lists/ordersArray');
const getRandomIndex = require('./getRandomIndex');

module.exports = (id, boardId, listId) => {
  
  let randomVerb = getRandomIndex(verbs);
  let randomUser = getRandomIndex(users);
  let randomOrder = getRandomIndex(ordersArray);
  let randomTitle = getRandomIndex(boards);
  let order, title;

  if (!boardId) {
    title = boards[randomTitle].title;
  } else {
    title = `Board #${boardId}`;
  };

  if (!listId) {
    order = ordersArray[randomOrder];
  } else {
    order = ordersArray[listId -1];
  };

  return {
    "id": id,
    "title": title,
    "order": order,
    "assignee": users[randomUser].id,
    "description": `${verbs[randomVerb]} that stuff`
  }
};