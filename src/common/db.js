const PicoDB = require('picodb');

const db = {
  Users: new PicoDB(),
  Boards: new PicoDB(),
  Tasks: new PicoDB(),
};


module.exports = db;