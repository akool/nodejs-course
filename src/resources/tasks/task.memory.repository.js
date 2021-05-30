const db = require('../../common/db');

const getAll = async (boardId) => {
  const tasks = await db.Tasks.find({ boardId }).toArray();

  return tasks;
};

const get = async (boardId, id) => {
  const tasks = await db.Tasks.find({ boardId, id }).toArray();

  return tasks[0];
};

const post = async (data) => {
  const tasks = await db.Tasks.insertOne(data);

  return tasks[0];
};

const put = async (id, data) => {
  const tasks = await db.Tasks.updateOne({ id }, { $set: data });

  return tasks.length ? tasks[0] : {};
};

const updateMany = async (filter, data) => {
  const tasks = await db.Tasks.updateMany(filter, { $set: data });

  return tasks;
}

const del = async (id) => {
  const deleted = await db.Tasks.deleteOne({ id });

  return deleted;
};

const delByBoard = async (boardId) => {
  await db.Tasks.deleteMany({ boardId });
};

module.exports = { getAll, get, post, put, del, delByBoard, updateMany };
