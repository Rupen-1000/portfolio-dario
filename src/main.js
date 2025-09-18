import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

import '@/assets/style/main.css'
import '@/assets/style/custom-style.css'



createApp(App).use(router).mount('#app')