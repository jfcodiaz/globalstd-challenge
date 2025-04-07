import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Francisco',
    roles: ['SuperAdmin'],
  }),
  actions: {
    fetchUser() {
      // Simulación de carga de datos
      this.name = 'Francisco Diaz'
      this.roles = ['SuperAdmin']
    },
  },
})
