let users = [
  {
    _id: 0,
    firstName: 'Lindell',
    lastName: 'Carter',
    email: 'lindellcarternyc@gmail.com',
    password: 'password1',
    admin: true
  },
  {
    _id: 1,
    firstName: 'Jose',
    lastName: 'Heredia',
    email: 'joseheredia@gmail.com',
    password: 'password2',
    admin: true
  },

]

const getUsers = () => {
  return new Promise((resolve, reject) => {
    if (users.length > 0) {
      resolve(users)
    } else {
      reject('NO USERS')
    }
  })
}

const getUserByEmail = email => {
  return new Promise((resolve, reject) => {
      getUsers()
        .then(allUsers => {
          const usersWithEmail = allUsers.filter(u => u.email === email)
          if (usersWithEmail.length === 1) {
            const user = usersWithEmail[0]
            resolve(user)
          } else {
            reject('SHOULD ONLY HAVE ONE USER WITH THAT EMAIL')
          }
        })
        .catch(err => {
          throw err
        })
  })
}

const addUser = (user) => {
  users = [...users, user]
}

module.exports = {
  getUsers, getUserByEmail, addUser
}