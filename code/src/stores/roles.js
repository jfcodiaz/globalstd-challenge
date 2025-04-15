import { defineStore } from 'pinia'

export const useRolesStore = defineStore('roles', {
  state: () => ({
    roles: [
      { id: 1, name: 'SuperAdmin' },
      { id: 2, name: 'Admin' },
      { id: 3, name: 'Employee' },
      { id: 4, name: 'Client' }
    ],
  })
})
