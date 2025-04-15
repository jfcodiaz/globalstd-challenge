import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTopBarStore = defineStore('topbar', () => {
  const content = ref(null)
  return {
    content
  }
})
