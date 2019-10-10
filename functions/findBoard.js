const boards = require('../payload/boards/boardsData');
const yesterdayLists = require('../payload/lists/yesterday');
const todayLists = require('../payload/lists/today');
const tomorrowLists = require('../payload/lists/tomorrow');

module.exports = (req) => {
  let boardIndex = boards.findIndex(board => +req.params.boardId === +board.id);
  let noBoard = boardIndex === -1;
  if (noBoard) {
    return 'There is no board with such id.';
  } else if (boards[boardIndex].id === 1) {
    return yesterdayLists;
  } else if (boards[boardIndex].id === 2) {
    return todayLists;
  } else if (boards[boardIndex].id === 3) {
    return tomorrowLists;
  }
}