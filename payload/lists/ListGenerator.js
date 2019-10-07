const titlesArray = require('./titlesArray');
const ordersArray = require('./ordersArray');

module.exports = (id) => {
  let randomTitle = Math.floor(Math.random() * titlesArray.length);
  let randomOrder = Math.floor(Math.random() * ordersArray.length);
  
  return {
    "id": id,
    "title": titlesArray[randomTitle],
    "order": ordersArray[randomOrder]
  }
}