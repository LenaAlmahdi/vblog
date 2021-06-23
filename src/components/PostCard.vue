<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">
          OVERLINE
        </div> -->
        <v-list-item-title class="text-h5 mb-1">
          {{ post.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="`https://picsum.photos/id/${post.id}/80/80`" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="$router.push({ name: 'ShowPost', params: { id: post.id } })"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
