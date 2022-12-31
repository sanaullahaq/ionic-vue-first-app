import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue'


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoryDetailsPage.vue') //This is called lazy import(dynamic Import), until i need the code for this component this is not be downloaded
  },
  {
    path: '/memories/add',
    component: () => import('../pages/AddMemoryPage.vue') //This is called lazy import(dynamic Import), until i need the code for this component this is not be downloaded
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
