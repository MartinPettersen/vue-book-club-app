import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bookofthemonth',
      name: 'bookofthemonth',
      component: () => import('../views/BookOfTheMonthView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/news',
      name: 'newsView',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/book/:id',
      name: 'bookinfo',
      component: () => import('../views/BookInfoView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
