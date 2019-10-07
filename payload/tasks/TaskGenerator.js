const verbs = require('./verbs');
const users = require('../users/usersData');
const ordersArray = require('../lists/ordersArray');

module.exports = (id) => {
  let randomVerb = Math.floor(Math.random() * verbs.length);
  let randomOrder = Math.floor(Math.random() * users.length);
  let randomUser = Math.floor(Math.random() * ordersArray.length);

  return {
    "id": id,
    "title": `${verbs[randomVerb]} that stuff`,
    "order": ordersArray[randomOrder],
    "assignee": users[randomUser][id],
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, officiis."
  }
};