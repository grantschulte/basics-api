function cleanUser(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
}

module.exports = {
  cleanUser
};
