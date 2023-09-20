<template>
  <div class="container">
    <Header/>
    <nuxt/>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
//import { logout, isAuthenticated } from '~/services/auth';
import jwt from '~/services/jwt.service.js'

export default {
  components: {
    Header
  },
  data () {
    return {
      token : '',
      isConeted : false,
    }
  },
  middleware({ redirect }) {
  },
  mounted: function () {
    //this.isConeted = jwt.isConnected();
  //  this.token = jwt.getToken();


  },
  methods: {
    logout: function() {
      jwt.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style>

</style>
