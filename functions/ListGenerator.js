const ordersArray = require('../payload/lists/ordersArray');

module.exports = (id, boardId, index) => {
  let randomOrder = Math.floor(Math.random() * ordersArray.length);
  
  return {
    "id": id,
    "title": `Board #${boardId}`,
    "order": ordersArray[index]
  }
}