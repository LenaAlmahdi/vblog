<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="$store.commit('toggleDrawer')"></v-app-bar-nav-icon>
    <router-link class="d-flex align-center" to="/">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </router-link>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn outlined text @click="$router.push({ name: 'Register' })"> Register </v-btn>
  </v-app-bar>
</template>
