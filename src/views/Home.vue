<template>
  <v-container>
    <div class="text-h3" @click="bus.$emit('Home:loaded')">List of Posts</div>
    <v-row class="mt-3">
      <v-col v-if="!posts.length"><div class="text-h4">Sorry we don't have any posts</div></v-col>
      <v-col cols="12" md="4" xl="3" v-for="post in posts" :key="post.id">
        <post-card :post="post"></post-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCard from '@/components/PostCard'

export default {
  name: 'Home',

  components: {
    PostCard
  },

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
    },

    changeTitle (id, title) {
      const i = this.posts.findIndex((post) => post.id === id)
      this.posts[i].title = title
    }
  },

  mounted () {
    this.getPosts()
  }
}
</script>
