const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({
    id = uuidv4(),
    title = 'Board',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [];
    if (columns.length) {
      columns.forEach((column) => {
        this.columns.push(new Column(column));
      });
    }
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;