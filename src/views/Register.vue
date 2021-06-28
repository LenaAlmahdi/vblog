<template>
  <v-row align="center" justify="center" border="2px solid">
    <v-col cols="5">
      <v-form>
        <h2>Registeration Form:</h2>
        <v-text-field
          v-model="user.name"
          :error-messages="nameErrors"
          :counter="20"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.username"
          :error-messages="nameErrors"
          :counter="10"
          label="UserName"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.phone"
          :error-messages="phoneErrors"
          :counter="15"
          label="Phone Number"
          required
        ></v-text-field>
         <v-text-field
          v-model="user.website"
          :error-messages="emailErrors"
          :counter="10"
          label="Your Website"
          required
        ></v-text-field>
        <div class="mr-7">
          Address Details:
          <v-text-field
            v-model="user.address.street"
            :error-messages="nameErrors"
            :counter="10"
            label="Street Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.address.suite"
            :error-messages="nameErrors"
            :counter="10"
            label="Suite Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.address.city"
            :error-messages="nameErrors"
            :counter="10"
            label="City Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.address.zipcode"
            :error-messages="nameErrors"
            :counter="10"
            label="zipcode"
            required
          ></v-text-field>
        </div>
         <div class="mr-7">
          Company Details:
          <v-text-field
            v-model="user.company.companyname"
            :error-messages="nameErrors"
            :counter="10"
            label="Company Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.company.catchPhrase"
            :error-messages="nameErrors"
            :counter="10"
            label="CatchPhrase Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.company.bs"
            :error-messages="nameErrors"
            :counter="10"
            label="bs"
            required
          ></v-text-field>
        </div>
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
  mixins: [validationMixin],

  validations: {
    user: {
      name: {
        required,
        maxLength: maxLength(20)
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
      address: {
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
        }
      },
      company: {
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
      }
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
      this.$v.user.name.$touch()
      if (!this.nameErrors.length) {
        const user = {
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          phone: this.user.phone,
          website: this.user.website,
          street: this.user.address.street,
          suite: this.user.address.suite,
          city: this.user.address.city,
          zipcode: this.user.address.zipcode,
          companyname: this.user.company.companyname,
          catchPhrase: this.user.company.catchPhrase,
          bs: this.user.company.bs
        }
        this.axios.post('https://jsonplaceholder.typicode.com/users', user)
          .then((res) => {
            alert('Welcome To This Website')
          })
      }
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
  computed: {
    nameErrors  () {
      const errors = []
      if (!this.$v.user.name.$dirty) return errors
      !this.$v.user.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.user.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors  () {
      const errors = []
      if (!this.$v.user.email.$dirty) return errors
      !this.$v.user.email.email && errors.push('Must be valid e-mail')
      !this.$v.user.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.user.phone.$dirty) return errors
      !this.$v.user.phone.maxLength && errors.push('phone must be at most 15 characters long')
      !this.$v.user.phone.required && errors.push('phone is required.')
      !this.$v.user.phone.integer && errors.push('phone is integer.')
      return errors
    }

  }
}
</script>
