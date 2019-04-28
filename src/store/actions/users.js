import axios from 'axios'

const actions = {}

//* Получение списка пользователей
actions.GET_USERS = async ({state, commit}, params) => {
  const url = state.api.users.get_users
  let res = await axios.get(url, {params})
  if (DEV) console.log('GET_USERS:', res)
  commit('SET_USERS', res.data.data)
  return res
}

//* Получение одного пользователя
actions.GET_USER = async ({state, commit}, id) => {
  const url = state.api.users.get_user + '/' + id
  let res = await axios.get(url)
  if (DEV) console.log('GET_USER:', res)
  return res
}

export default actions
