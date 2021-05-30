const db = require('../../common/db');

const getAll = async () => {
  const boards = await db.Boards.find({}).toArray();

  return boards;
};

const get = async (id) => {
  const boards = await db.Boards.find({id}).toArray();

  return boards[0];
};

const post = async (data) => {
  const boards = await db.Boards.insertOne(data);

  return boards[0];
};

const put = async (id, data) => {
  let updated = null;
  const boards = await db.Boards.find({id}).toArray();

  if (boards.length) {
    updated = await db.Boards.updateOne(boards[0], { $set: data });
    return updated[0];
  }

  return updated;
};

const del = async (id) => {
  const deleted = await db.Boards.deleteOne({id});

  return deleted;
};

module.exports = { getAll, get, post, put, del };
