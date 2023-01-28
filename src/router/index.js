import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Category from '../views/CategoryView.vue'
import Login from '../views/LoginView.vue'
import RegisterAdmin from '../views/RegisterAdminView.vue'
import AdminView from '../views/AdminView.vue'

import ProductsAdminView from '../views/ProductsAdminView.vue'
import CategorysAdminView from '../views/CategorysAdminView.vue'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

var isAuthenticated = false;
function checkAuth() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isAuthenticated = true;
        resolve(true);
      } else {
        isAuthenticated = false;
        resolve(false);
      }
    });
  });
}

export const router = createRouter({
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
      component: RegisterAdmin,
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: AdminView,
      beforeEnter: (to, from, next) => {
        checkAuth().then((isAuthenticated) => {
          if (isAuthenticated) {
            next();
          } else {
            next('/login');
          }
        });
      },
      children: [
        {
          path: '',
          name: 'admin-panel-products',
          component: ProductsAdminView,
        },
        {
          path: 'categorys',
          name: 'admin-panel-categorys',
          component: CategorysAdminView,
        },
      ]
    },
  ]
})

export default router
