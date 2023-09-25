<template>
  <section class="container">

    <Header/>
    <div>
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Login" active>
            <Login/>
          </b-tab>
          <b-tab title="Register">
            <Form/>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>

import Login from '~/components/Login.vue'
import Form from '~/components/Form.vue'
export default {

  components: {
    Login,
    Form
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
