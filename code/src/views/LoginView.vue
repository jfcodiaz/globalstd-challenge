<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-6">GlobalStd Challenge</h1>
      <form @submit.prevent="submit">
        <Input
          v-model="form.email"
          type="email"
          id="email"
          label="Email"
          required
        />
        <Input
          v-model="form.password"
          type="password"
          id="password"
          label="Password"
          required
        />
        <Alert v-if="error" :message="error" type="error" class="mb-4" />
        <Button>Login</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Alert from '@/components/ui/Alert.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const error = ref(null)

async function submit() {
  error.value = null
  try {
    await authStore.login(form.value)
    router.push('/dashboard')
  } catch (err) {
    error.value =
      err?.response?.data?.message ||
      'An error occurred while trying to log in.'
  }
}
</script>
