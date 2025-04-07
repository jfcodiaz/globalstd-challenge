import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './style.css'
import './assets/styles/main.scss'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedstate)
app.use(router)
app.use(pinia)
app.mount('#app')
