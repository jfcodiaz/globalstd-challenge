<template>
  <header class="flex items-center justify-between bg-white h-14 px-6 border-b">
    <div class="flex items-center gap-2 text-sm text-gray-600">
      <span>🏠</span>
      <span>Superusuario</span>
    </div>
    <button class="bg-[#1676F3] hover:bg-[#0f5fd9] text-white text-sm px-4 py-2 rounded-md">
      + Nuevo usuario
    </button>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>
