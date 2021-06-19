<template>
  <v-container>
    <div class="text-h3">List of Posts</div>
    <v-row class="mt-3">
      <v-col v-if="!posts.length"><div class="text-h4">Sorry we don't have any posts</div></v-col>
      <v-col cols="12" md="4" xl="3" v-for="post in posts" :key="post.id">
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
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',

  data () {
    return {
      posts: []
    }
  },

  methods: {
    getPosts () {
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        this.posts = res.data
      })
    }
  },

  mounted () {
    this.getPosts()
  }
}
</script>
