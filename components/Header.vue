<template>
  <section class="header">
    <div class="">
      <div class="headerTop">
        <div>
          <b-nav>
            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/login" > <span/> Feature 1 : Login </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/form" > <span/> Feature 1 : Formulaire complément </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link
                class="iteam-link"
                to="/page/form" > <span/> Feature 3  </nuxt-link>
            </b-nav-item>
            <b-nav-item >
              <nuxt-link
                class="iteam-link"
                to="/graphes" > <span/>  Feature 4 :  Graphes</nuxt-link>
            </b-nav-item>
            <b-nav-item >
              <nuxt-link
                class="iteam-link"
                to="/" > <span/>  Register</nuxt-link>
            </b-nav-item>
          </b-nav>
        </div>
      </div>

    </div>

  </section>
</template>


<script>


export default {
  components: {
    // NotificationList,
    // SvgFiller,
  },
  data: function () {
    return {
    }
  },
  mounted: function () {


  },

}
</script>
