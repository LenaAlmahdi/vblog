import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: () => import('@/views/posts/ShowPost.vue'),
    props: route => ({ postId: route.params.id })
  },
  {
    path: '/posts/:id/edit',
    name: 'EditPost',
    component: () => import('@/views/posts/EditPost.vue'),
    props: route => ({ postId: route.params.id })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
