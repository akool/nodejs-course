const db = require('../../common/db');

const getAll = async () => {
  const users = await db.Users.find({}).toArray();

  return users;
};

const get = async (id) => {
  const users = await db.Users.find({id}).toArray();

  return users[0];
};

const post = async (data) => {
  const users = await db.Users.insertOne(data);

  return users[0];
};

const put = async (id, data) => {
  let updated = null;
  const users = await db.Users.find({id}).toArray();

  if (users.length) {
    updated = await db.Users.updateOne(users[0], { $set: data });
    return updated[0];
  }

  return updated;
};

const del = async (id) => {
  const deleted = await db.Users.deleteOne({id});

  return deleted;
};

module.exports = { getAll, get, post, put, del };
