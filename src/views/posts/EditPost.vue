<template>
  <v-container>
    <div class="text-h3">The Edit Post View</div>
    <v-form @submit.prevent="editPost">
      <v-text-field v-model="post.title" label="Post Title" />
      <v-text-field v-model="post.body" label="Post Content" />
      <v-btn type="submit">Edit Post</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  props: ['postId'],

  name: 'EditPost',

  data () {
    return {
      post: {}
    }
  },

  methods: {
    loadPost () {
      this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`).then((res) => {
        this.post = res.data
      })
    },
    editPost () {
      this.$store.commit('toggleLoading')
      const payload = {
        title: this.post.title,
        body: this.post.body
      }
      this.axios.put(`https://jsonplaceholder.typicode.com/posts/${this.postId}`, payload).then((res) => {
        this.$store.commit('toggleLoading')
      })
    }
  },

  mounted () {
    this.loadPost()
  }

}
</script>
