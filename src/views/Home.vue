<template>
  <v-container>
    <div class="text-h3" @click="bus.$emit('Home:loaded')">List of Posts</div>
    <v-row class="mt-3">
      <v-col v-if="!$store.state.posts.length"><div class="text-h4">Sorry we don't have any posts</div></v-col>
      <v-col cols="12" md="4" xl="3" v-for="post in $store.state.posts" :key="post.id">
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

  computed: {
    // shuffledPosts () {
    //   return this.shuffle(this.$store.state.posts)
    // }
  },

  methods: {
    getPosts () {
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        this.$store.commit('setPosts', res.data)
      })
    },
    shuffle (array) {
      var currentIndex = array.length; var randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }

      return array
    }
  },

  mounted () {
    this.getPosts()
  }
}
</script>
