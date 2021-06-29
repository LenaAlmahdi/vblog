<template>
<v-container class="mt-4">
  <p>Create New Photo</p>
  <form>
  <!-- title -->
    <v-text-field
      v-model="title"
      :error-messages="titleErrors"
      label="Title"
      required
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
    ></v-text-field>
    <!-- url -->
    <v-text-field
      v-model="url"
      :error-messages="urlErrors"
      label="Photo Url"
      required
      @input="$v.url.$touch()"
      @blur="$v.url.$touch()"
    ></v-text-field>
    <!-- thumbnailurl -->
    <v-text-field
      v-model="thumbnailurl"
      :error-messages="urlErrors"
      label="Thumbnail Url"
      required
      @input="$v.thumbnailurl.$touch()"
      @blur="$v.thumbnailurl.$touch()"
    ></v-text-field>
    <!-- album_id -->
    <v-select
      v-model="album_id"
      :items="albums"
      item-text="title"
      item-value="id"
      :error-messages="selectErrors"
      label="Select Album"
      required
      @change="$v.album_id.$touch()"
      @blur="$v.album_id.$touch()"
    >
    </v-select>
    <!-- save button -->
    <v-btn  class="mr-4"  @click="createPhoto;snackbar = true" >
      Save Photo
    </v-btn>
  </form>
  <!-- snackbar -->

<div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreatePhoto',
  mixins: [validationMixin],
  validations: {
    title: { required },
    url: { required },
    thumbnailurl: { required },
    album_id: { required }
  },
  data () {
    return {
      album_id: '',
      title: '',
      url: '',
      thumbnailurl: '',
      albums: [],
      snackbar: false,
      text: 'Photo Was Created Successfully.',
      timeout: 3000
    }
  },
  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.album_id.$dirty) return errors
      !this.$v.album_id.required && errors.push('Album is required')
      return errors
    },
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    urlErrors () {
      const errors = []
      if (!this.$v.url.$dirty) return errors
      !this.$v.url.required && errors.push('Photo Url is required')
      return errors
    }
  },
  methods: {

    getalbums (cb) {
      this.axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
        this.albums = res.data
        cb()
      })
    },
    createPhoto () {
      this.axios.post('https://jsonplaceholder.typicode.com/photos',
        {
          title: this.title,
          album_id: this.album_id,
          url: this.url,
          thumbnailurl: this.thumbnailurl
        }).then(response => {
        this.data = response.data
        alert('photo created sucsess')
      })
    }
  },
  mounted () {
    this.getalbums()
  }
}
</script>
