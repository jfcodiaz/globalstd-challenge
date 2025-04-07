<template>
  <aside class="w-[220px] bg-[#EDF0F7] py-6 px-4">
    <nav class="flex flex-col gap-2">
      <template v-for="item in menu" :key="item.label">
        <button
          v-if="item.action"
          @click="item.action"
          class="block px-4 py-2 rounded-full text-sm font-medium text-gray-600 text-left hover:bg-white hover:text-gray-900"
        >
          {{ item.label }}
        </button>
        <RouterLink
          v-else
          :to="item.to"
          class="block px-4 py-2 rounded-full text-sm font-medium text-gray-600"
          :class="{ 'bg-white text-gray-900': $route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </template>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  alert('Logging out...');
  //userStore.logout()
  router.push('/login')
}

const role = computed(() => userStore.role)

const menu = computed(() => {
  const base = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Usuarios', to: '/users' },
    { label: 'Configuración', to: '/configuration' },
    { label: 'Logout', action: logout }
  ]
  return base
})
</script>
