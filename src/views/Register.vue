<template>
  <v-row align="center" justify="center" border="2px solid">
    <v-col cols="5">
      <v-form>
        <h2>Registeration Form:</h2>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="username"
          :error-messages="nameErrors"
          :counter="10"
          label="UserName"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :error-messages="phoneErrors"
          :counter="15"
          label="Phone Number"
          required
        ></v-text-field>
         <v-text-field
          v-model="website"
          :error-messages="emailErrors"
          :counter="10"
          label="Your Website"
          required
        ></v-text-field>
        <v-title class="mr-7">
          Address Details:
          <v-text-field
            v-model="street"
            :error-messages="nameErrors"
            :counter="10"
            label="Street Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="suite"
            :error-messages="nameErrors"
            :counter="10"
            label="Suite Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="city"
            :error-messages="nameErrors"
            :counter="10"
            label="City Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="zipcode"
            :error-messages="nameErrors"
            :counter="10"
            label="zipcode"
            required
          ></v-text-field>
        </v-title>
         <v-title class="mr-7">
          Company Details:
          <v-text-field
            v-model="companyname"
            :error-messages="nameErrors"
            :counter="10"
            label="Company Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="catchPhrase"
            :error-messages="nameErrors"
            :counter="10"
            label="CatchPhrase Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="bs"
            :error-messages="nameErrors"
            :counter="10"
            label="bs"
            required
          ></v-text-field>
        </v-title>
        <v-btn class="mr-4" @click="register">Register</v-btn>
        <v-btn @click="clear"> clear </v-btn>
        <p>Already have an account?<router-link to="Login">Login</router-link></p>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, integer } from 'vuelidate/lib/validators'
export default {

  validations: {
    mixins: [validationMixin],
    name: {
      required,
      maxLength: maxLength(10)
    },
    username: {
      required,
      maxLength: maxLength(15)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      integer,
      maxLength: maxLength(15)
    },
    website: {
      required,
      email
    },
    street: {
      required
    },
    suite: {
      required
    },
    city: {
      required
    },
    zipcode: {
      required,
      integer
    },
    companyname: {
      required,
      maxLength: maxLength(10)
    },
    catchPhrase: {
      required,
      maxLength: maxLength(10)
    },
    bs: {
      required,
      maxLength: maxLength(10)
    }

  },

  data  () {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        phone: 0,
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: ''
        },
        company: {
          companyname: '',
          catchPhrase: '',
          bs: ''
        }
      }
    }
  },
  methods: {
    register () {
      const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        phone: this.phone,
        website: this.website,
        street: this.address.street,
        suite: this.address.suite,
        city: this.address.city,
        zipcode: this.address.zipcode,
        companyname: this.company.companyname,
        catchPhrase: this.company.catchPhrase,
        bs: this.company.bs
      }
      this.axios.put(`https://jsonplaceholder.typicode.com/users/${this.userId}`, user).then((res) => { alert('Welcome To This Website') })
    },

    clear  () {
      this.name = ''
      this.username = ''
      this.email = ''
      this.phone = ''
      this.address.street = ''
      this.address.suite = ''
      this.address.city = ''
      this.address.zipcode = ''
      this.company.companyname = ''
      this.company.catchPhrase = ''
      this.company.bs = ''
    }
  },
  mounted () {
    this.register()
    this.clear()
  },
  computed: {
    nameErrors  () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors  () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneerror () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength && errors.push('phone must be at most 15 characters long')
      !this.$v.phone.required && errors.push('phone is required.')
      !this.$v.phone.integer && errors.push('phone is integer.')
      return errors
    }

  }
}
</script>
