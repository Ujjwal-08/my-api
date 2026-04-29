// exists but NOT used anywhere
function validateUser(user) {
  if (!user.name) {
    return false;
  }
  return true;
}

module.exports = { validateUser };