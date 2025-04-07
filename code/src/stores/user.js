import { defineStore } from 'pinia'
import { getUsers } from '@/repositories/userRepository'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    meta: null,
    filters: {
      search: '',
      role: '',
      status: '',
      page: 1
    }
  }),
  actions: {
    async fetchUsers() {
      const { data, meta } = await getUsers(this.filters)
      this.users = data
      this.meta = meta
    },
    setFilter(key, value) {
      this.filters[key] = value
    },
    resetFilters() {
      this.filters = {
        search: '',
        role: '',
        status: '',
        page: 1
      }
    }
  }
})
