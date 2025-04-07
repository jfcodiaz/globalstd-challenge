import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import UserListView from '@/views/UserListView.vue'
import LoginView from '@/views/LoginView.vue'
import ConfigurationView from '../views/ConfigurationView.vue'

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
      },
      {
        path: 'configuration',
        name: 'Configuration',
        component: ConfigurationView,
      },
      {
        path: 'users',
        name: 'Users',
        component: UserListView,
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
