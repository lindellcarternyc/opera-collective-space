import { getUserByEmail } from '../data/users'

class AuthService {
  loggedIn = false

  isLoggedIn = () => this.loggedIn

  login = () => { this.loggedIn = true }
  logout = () => { this.loggedIn = false }

  authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
      getUserByEmail(email)
      .then(user => {
        if (user.password === password) {
          this.login()
          resolve('success')
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

const authService = new AuthService()

export default authService