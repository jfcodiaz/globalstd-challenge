import { defineStore } from 'pinia'
import { login } from '@/repositories/authRepository'
import { encrypt, decrypt } from '@/services/crypto'
import { ROLES } from '@/constants/roles'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      const { token, user } = await login(credentials)
      this.token = token
      this.user = user
    },
    logout() {
      this.user = null
      this.token = null
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    hasRole: (state) => (role) => state.user?.roles?.some(r => r.name === role),
    isAdmin: (state) => state.user?.roles?.some(r => [ROLES.SUPER_ADMIN, ROLES.ADMIN].includes(r.name)),
  },
  persist: {
    paths: ['token', 'user'],
    serializer: {
      serialize: (value) => encrypt(value),
      deserialize: (value) => decrypt(value),
    },
  },
})
