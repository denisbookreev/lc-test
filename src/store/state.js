const apiUrl = 'https://reqres.in/api'
const usersUrl = `${apiUrl}/users`

const state = {
  api: {
    users: {
      get_users: usersUrl,
      get_user: usersUrl
    }
  },
  
  users: null
}

export default state
