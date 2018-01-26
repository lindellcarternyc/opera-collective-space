let users = []

export const getUsers = () => users

export const addUser = (user) => {
  users = [...users, user]
}