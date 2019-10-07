const titlesArray = [
  "Family Tasks", "Home Tasks", "Entertainment", "Job Tasks"
];
const ordersArray = [
  "Important", "Desired", "Harebrained"
];

module.exports = (id) => {
  let randomTitle = Math.floor(Math.random() * titlesArray.length);
  let randomOrder = Math.floor(Math.random() * ordersArray.length);
  return {
    "id": id,
    "title": titlesArray[randomTitle],
    "order": ordersArray[randomOrder]
  }
}