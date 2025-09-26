import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Publications from '@/components/publication/Publication.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/publications', component: Publications }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
