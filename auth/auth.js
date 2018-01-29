const { getUserByEmail } = require('../data/users')

class AuthService {
  constructor() {
    this.loggedIn = false
  }

  isLoggedIn() {
    return this.loggedIn
  }

  login() { 
    this.loggedIn = true 
  }

  logout() { 
    this.loggedIn = false 
  }

  authenticate(email, password) {
    return new Promise((resolve, reject) => {
      getUserByEmail(email)
      .then(user => {
        if (user.password === password) {
          this.login()
          resolve(user)
        } else {
          reject('wrong password')
        }
      })
      .catch(err => {
        const msg = 'Error getting users by email: ' + err.message
        throw new Error(msg)
      })
    })
  }
}

module.exports = () => new AuthService()