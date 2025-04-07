import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import UserListView from '@/views/UserListView.vue'
import LoginView from '@/views/LoginView.vue'
import ConfigurationView from '@/views/ConfigurationView.vue'
import { useAuthStore } from '@/stores/auth'
import { ROLES } from '@/constants/roles'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'users',
        name: 'Users',
        component: UserListView,
        meta: {
          requiresAuth: true,
          roles: [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.EMPLOYEE],
        },
      },
      {
        path: 'configuration',
        name: 'Configuration',
        component: ConfigurationView,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return next('/login')
  }

  if (to.path === '/login' && authStore.isLoggedIn) {
    return next('/dashboard')
  }

  if (to.meta.roles && !to.meta.roles.some(role => authStore.hasRole(role))) {
    return next('/dashboard')
  }

  return next()
})
