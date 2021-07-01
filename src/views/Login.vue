<template>
  <v-container fluid class="full-height login-container">
    <v-row justify="center" align="center" class="full-height">
      <v-col cols="5">
        <v-card>
          <v-card-title>
            Login
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="user.username" label="Username"></v-text-field>
              <v-text-field v-model="user.email" label="Password" type="password"></v-text-field>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    login () {
      const self = this
      this.axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const users = res.data

        const index = users.findIndex(item => {
          return item.username === self.user.username && item.email === self.user.email
        })

        if (index !== -1) {
          self.$store.commit('setAuthUser', users[index])
          self.$router.push({ name: 'Home' })
        } else {
          alert('you are not a user')
        }
      })
    }
  }
}
</script>

<style>
.full-height {
  height: 100%;
}

.login-container {
  position: relative;
}

.login-container::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('http://twistedsifter.com/wp-content/uploads/2013/04/two-kids-under-a-banana-leaf-in-the-rain-indonesia.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
}
</style>
