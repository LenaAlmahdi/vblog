<template>
  <v-app>
    <app-bar></app-bar>
    <side-bar></side-bar>
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
    <app-loader></app-loader>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar'
import AppFooter from '@/components/layout/AppFooter'
import AppLoader from './components/layout/AppLoader'
import SideBar from './components/layout/SideBar'

export default {
  name: 'App',

  components: {
    AppBar,
    AppFooter,
    AppLoader,
    SideBar
  },

  data: () => ({
    //
  })
}
</script>
