import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Category from '../views/CategoryView.vue'
import Login from '../views/LoginView.vue'
import RegisterAdmin from '../views/RegisterAdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:name',
      name: 'category',
      component: Category
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register-admin',
      name: 'register-admin',
      component: RegisterAdmin
    },
  ]
})

export default router
