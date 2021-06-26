<template>
  <v-overlay :value="$store.state.loading">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {

}
</script>

<style>

</style>
