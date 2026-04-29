const repo = require("../db/userRepo");

function getAllUsers() {
  return repo.findAll();
}

function createUser(data) {
  const user = {
    id: Date.now(),
    name: data.name
  };

  return repo.saveUser(user);
}

module.exports = {
  getAllUsers,
  createUser
};