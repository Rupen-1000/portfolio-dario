import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

import Katex from 'vue-katex-auto-render';

import 'katex/dist/katex.min.css';
import '@/assets/style/main.css'

// Custom styling
import '@/assets/style/custom-arrow-style.css'
import '@/assets/style/custom-icon-style.css'
import '@/assets/style/profile-img-style.css'
import '@/assets/style/custom-katex-style.css'
import '@/assets/style/custom-text-style.css'



const app = createApp(App)

app.use(router)
app.directive('katex', Katex)

app.mount('#app')