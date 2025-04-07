import api from '@/services/api'

export const login = async (credentials) => {
  const { data } = await api.post('/login', credentials)
  return data.data
}

export const logout = async () => {
  return Promise.resolve()
}
