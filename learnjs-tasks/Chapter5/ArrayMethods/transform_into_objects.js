let usersTransformed = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));