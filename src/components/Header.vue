<template>
  <section class="header">
    <div class="">
      <div class="headerTop">
        <div>
          <b-nav>
<!--            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/login" > <span/> Feature 1 : Login </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/form" > <span/> Feature 1 : Formulaire complément </nuxt-link>
            </b-nav-item>-->
            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/page/login" > <span/> Feature 1  </nuxt-link>
            </b-nav-item>
            <b-nav-item  v-if="isConnectedStore">
              <nuxt-link
                class="iteam-link"
                to="/page/form" > <span/> Feature 3  </nuxt-link>
            </b-nav-item>
            <b-nav-item  v-if="isConnectedStore">
              <nuxt-link
                class="iteam-link"
                to="/graphes" > <span/>  Feature 4 :  Graphes</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <a @click="logout()">Logout</a>
            </b-nav-item>
          </b-nav>
        </div>
      </div>

    </div>

  </section>
</template>


<script>


import { jwt } from '~/services/jwt.service'
export default {
  components: {
    // NotificationList,
    // SvgFiller,
  },
  data: function () {
    return {
      isConnected : !!jwt.getToken()
    }
  },
  mounted: function () {


  },
  computed: {
    isConnectedStore() {

      if(jwt.getToken()) {
        this.isConnected = true;
        return true;
      }
      else{
        this.isConnected = false;
        return false;
      }
    }
  },
  methods: {

    logout() {
       jwt.logout();

      this.isConnected =  false;
      this.$router.push('/page/login');
      //window.location.reload();
    },

  },
}
</script>
