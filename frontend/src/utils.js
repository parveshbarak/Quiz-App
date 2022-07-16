const saveInLocalStorage = (data) => {
  const { token, user } = data
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

const isAuth = () => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (token && user) return true
  return false
}

const logOut = () => {
  localStorage.clear()
  window.location.href = '/'
}

const getToken = () => {
  return localStorage.getItem('token')
}

export { saveInLocalStorage, isAuth, logOut, getToken }
