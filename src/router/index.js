import store from '@/store'
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
    path: '/photos/create',
    name: 'CreatePhoto',
    component: () => import('@/views/photos/CreatePhoto.vue')
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
    props: route => ({ postId: route.params.id }),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        // eslint-disable-next-line eqeqeq
        const index = store.state.posts.findIndex(post => post.id == to.params.id)

        if (index !== -1) {
          const post = store.state.posts[index]
          // eslint-disable-next-line eqeqeq
          if (post.userId == store.state.user.id) { next() } else { next({ name: 'Home' }) }
        }
      } else { next({ name: 'Home' }) }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) { next() } else { next({ name: 'Home' }) }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) { next() } else { next({ name: 'Home' }) }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
