import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Publications from '@/components/publication/Publication.vue'
import OpenPosition from '@/components/position/OpenPosition.vue'   

const routes = [
  { path: '/', component: Home },
  { path: '/publications', component: Publications },
  { path: '/open-position', component: OpenPosition }                
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router
