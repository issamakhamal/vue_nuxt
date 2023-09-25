<template>
  <section class="container">
    <div>
      <h2>Formulare</h2>
      <!--danger  success-->
      <Alert v-if="isPopupVisible" :message="popupMessage" :popupClass="popupClass" @close="closePopup"/>
      <div>
        <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Your Name:" >
            <b-form-input
              id="input-1"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>


          <b-form-group id="input-group-1" label="Your Prenom:" >
            <b-form-input
              id="input-3"
              v-model="form.prenom"
              placeholder="Enter Prenom"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Email:">
            <b-form-input
              id="input-2"
              v-model="form.email"
              placeholder="Enter Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Address"
            label-for="address-input"
            description="Enter your address"
          >
            <b-form-input
              id="address-input"
              v-model="form.address"
              placeholder="Enter your address"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Telephone Number"
            label-for="telephone-input"
            description="Enter your telephone number"
          >
            <b-form-input
              id="telephone-input"
              v-model="form.telephone"
              placeholder="Enter your telephone number"
            ></b-form-input>
          </b-form-group>



          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>

import Alert from '~/components/Alert.vue'
export default {
  components: {
    Alert,
  },
  data () {
    return {
      isPopupVisible: false,
      popupMessage: '',
      popupClass: '',
      form: {
        email: '',
        name: '',
        prenom: '',
        address: '',
        telephone: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      if(this.form.name && this.form.email){
         this.showSuccessPopup();
      }
      else{
        this.showDangerPopup();
      }
      this.$store.dispatch('form/addFormData', this.form);
      //this.onReset();
     // this.$router.push('/');

    },
    onReset(event) {
      this.form.email = ''
      this.form.name = ''
      this.form.prenom = ''
      this.form.address = ''
      this.form.telephone = ''
      this.show = true;
    },
    showDangerPopup() {
      this.popupMessage = 'Dangerous action failed!';
      this.popupClass = 'danger';
      this.isPopupVisible = true;
    },
    showSuccessPopup() {
      this.popupMessage = 'Success! Action completed.';
      this.popupClass = 'success';
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  }
}
</script>

<style>

</style>
