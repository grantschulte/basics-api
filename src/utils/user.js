function cleanUser(user) {
  return {
    id: user.id,
    admin: user.admin
  };
}

module.exports = {
  cleanUser
};
