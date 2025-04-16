<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Usuarios</h2>
    <UserDialog ref="userDialogRef" @save="onCreateUser" @update="onUpdateUser"/>
    <!-- Filters -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex gap-4">
        <select v-model="filters.role" class="border px-2 py-1 rounded-md">
          <option value="">All Roles</option>
          <option value="SuperAdmin">SuperAdmin</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Client">Client</option>
        </select>

        <select v-model="filters.status" class="border px-2 py-1 rounded-md">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <input
        v-model="filters.search"
        type="text"
        placeholder="Search by name or email"
        class="border px-4 py-1 rounded-md w-64"
      />
    </div>

    <!-- User Table -->
    <table class="w-full table-auto bg-white rounded-xl shadow overflow-hidden">
      <thead class="bg-gray-100 text-left">
        <tr>
          <th class="px-4 py-2">Avatar</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Status</th>
          <th class="px-4 py-2">Created</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="px-4 py-2">
            <Avatar :src="user.avatar_url" :size="40" />
          </td>
          <td class="px-4 py-2 font-medium">{{ user.name }}</td>
          <td class="px-4 py-2">{{ user.email }}</td>
          <td class="px-4 py-2">{{ user.roles?.[0]?.name }}</td>
          <td class="px-4 py-2">
            <span
              :class="user.is_active ? 'text-green-600' : 'text-red-600'"
              class="font-semibold"
            >
              {{ user.is_active ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-4 py-2">{{ formatDate(user.created_at) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="link in pagination.links"
        :key="link.label"
        :disabled="!link.url"
        v-html="link.label"
        @click="changePage(link.url)"
        class="px-3 py-1 rounded-md text-sm"
        :class="{
          'bg-blue-600 text-white': link.active,
          'bg-gray-100 hover:bg-gray-200': !link.active,
          'opacity-50 cursor-not-allowed': !link.url
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, h, shallowRef } from 'vue'
import dayjs from 'dayjs'
import api from '@/services/api'
import Avatar from '../components/ui/Avatar.vue'
import UserDialog from '../components/dialogs/UserDialog.vue'
import UserListTopBar from '@/components/topbars/UserListTopBar.vue'
import { useTopBarStore } from '@/stores/topbar'

const users = ref([])
const pagination = ref({})
const filters = ref({
  role: '',
  status: '',
  search: '',
})
const currentUrl = ref('/users')
const userDialogRef = ref(null)

function openDialog() {
  userDialogRef.value?.open()
}

function onCreateUser(user) {
  console.log('Created:', user)
  fetchUsers()
}

function onUpdateUser(user) {
  console.log('Updated:', user)
  fetchUsers()
}

function formatDate(date) {
  return dayjs(date).format('YYYY-MM-DD')
}

function changePage(fullUrl) {
  const url = new URL(fullUrl)
  const relativePath = url.pathname.replace('/api', '') + url.search
  fetchUsers(relativePath)
}

async function fetchUsers(url = '/users') {
  try {
    const { data } = await api.get(url, {
      params: {
        role: filters.value.role,
        is_active: filters.value.status === 'active' ? 1 : filters.value.status === 'inactive' ? 0 : '',
        search: filters.value.search,
      },
    })

    users.value = data.data.users
    pagination.value = data.meta
    pagination.value.links = data.meta.links
    currentUrl.value = url
  } catch (error) {
    console.error('Failed to fetch users:', error)
    users.value = []
  }
}

// Watch for filter changes
watch(filters, () => {
  fetchUsers('/users')
}, { deep: true })

const topbarStore = useTopBarStore()

const topbarComponent = shallowRef({
  components: { UserListTopBar },
  setup() {
    return () => h(UserListTopBar, { onNew: openDialog })
  }
})

onMounted(() => {
  topbarStore.content = topbarComponent
  fetchUsers()
})

onUnmounted(() => {
  topbarStore.content = null
})
</script>
