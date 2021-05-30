const usersRepo = require('./user.memory.repository');
const { updateMany } = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const get = (id) => usersRepo.get(id);
const post = (data) => usersRepo.post(data);
const put = (id, data) => usersRepo.put(id, data);
const del = async (id) => {
  await usersRepo.del(id);
  await updateMany( { userId: id }, { userId: null });
}

module.exports = { getAll, get, post, put, del };
