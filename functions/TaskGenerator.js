const verbs = require('../payload/tasks/verbs');
const users = require('../payload/users/usersData');
const ordersArray = require('../payload/lists/ordersArray');
const getRandomIndex = require('./getRandomIndex');

module.exports = (id) => {
  let randomVerb = getRandomIndex(verbs);
  let randomUser = getRandomIndex(users);
  let randomOrder = getRandomIndex(ordersArray);

  return {
    "id": id,
    "title": 1,
    "order": ordersArray[randomOrder],
    "assignee": users[randomUser][id],
    "description": `${verbs[randomVerb]} that stuff`
  }
};