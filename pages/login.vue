<template>
  <section class="container">
    <div>
      <h2>login</h2>
        <div>
          <Alert v-if="isPopupVisible" :message="popupMessage" :popupClass="popupClass" @close="closePopup"/>
          <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Your Name:" >
              <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Enter name"
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

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
    </div>
  </section>
</template>

<script>
//import auth from '~/services/auth';
import { UserService } from '~/services/api.service'
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
      },
      show: true
    }
  },
  methods: {
    async onSubmit() {
      UserService.Login(this.form);
     /* UserService.Login(this.form)
        .then((sucess)=>{
          this.showSuccessPopup();
      });*/
      this.showSuccessPopup();
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
