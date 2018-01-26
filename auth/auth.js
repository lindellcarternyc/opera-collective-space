class AuthService {
  loggedIn = false

  isLoggedIn = () => this.loggedIn

  login = () => { this.loggedIn = true }
  logout = () => { this.loggedIn = false }

  authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
      if (email === 'email' && password === 'password') {
        resolve()
      } else {
        reject('Invalid email or password')
      }
    })
  }
}

const authService = new AuthService()

export default authService