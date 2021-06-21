<template>
  <div>
    <v-parallax
      dark
      :src="`https://picsum.photos/id/${postId}/1920/1080`"
      :lazy-src="`https://picsum.photos/id/${postId}/10/10`"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            {{ post.title }}
          </h1>
          <h4 class="subheading">
            {{ user.name }}
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <div class="text-body-1">
        {{ post.body }}
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['postId'],

  name: 'ShowPost',

  data () {
    return {
      post: {},
      user: {}
    }
  },

  methods: {
    getPost (cb) {
      this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`).then(res => {
        this.post = res.data
        cb()
      })
    },

    getUserInfo () {
      this.axios.get(`https://jsonplaceholder.typicode.com/users/${this.post.userId}`).then(res => {
        this.user = res.data
      })
    }
  },

  mounted () {
    this.getPost(() => { this.getUserInfo() })
  }
}
</script>
