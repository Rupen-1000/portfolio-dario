import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

import Katex from 'vue-katex-auto-render';

import 'katex/dist/katex.min.css';
import '@/assets/style/main.css'
import '@/assets/style/custom-style.css'


const app = createApp(App)

app.use(router)
app.directive('katex', Katex)

app.mount('#app')