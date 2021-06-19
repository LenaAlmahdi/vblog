<template>
  <v-app>
    <app-bar></app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar'
import AppFooter from '@/components/layout/AppFooter'

export default {
  name: 'App',

  components: {
    AppBar,
    AppFooter
  },

  data: () => ({
    //
  })
}
</script>
