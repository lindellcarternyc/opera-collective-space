let admins = [
  {firstName: 'Lindell'},
  {firstName: 'Jose'}
]

export const getAdmins = () => {
  return new Promise((resolve, reject) => {
    if (admins.length > 0) {
      resolve(admins)
    } else {
      reject('NO ADMINS')
    }
  })
}

export const getAdminById = id => {
  return new Promise((resolve, reject) => {
    getAdmins()
      .then(allAdmins => {
        if (id >= 0 && id < allAdmins.length) {
          const admin = allAdmins[id]
          resolve(admin)
        } else {
          reject('ERROR: ' + id + ' is not a valid id')
        }
      }).catch(err => {
        throw err
      })
  })
}