<template>
  <v-row align="center" justify="center">
    <v-col cols="5">
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="username"
          :error-messages="nameErrors"
          :counter="10"
          label="UserName"
          required
          @input="$v.username.$touch()"
          @blur="$v.username.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <
        <v-btn class="mr-4" @click="register"> Register</v-btn>
        <v-btn @click="clear"> clear </v-btn>
        <p>Already have an account?<router-link to="Login">Login</router-link></p>
      </form>
    </v-col>
  </v-row>
</template>
