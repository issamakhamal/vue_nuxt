<template>
 <div>

   <Header/>
   <Alert v-if="isPopupVisible" :message="popupMessage" :popupClass="popupClass" @close="closePopup"/>
   <h1 className="h3 mb-3 fw-normal">Please register</h1>
   <b-form @submit.prevent="submit" v-if="show">
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
     <b-form-group id="input-group-2" label="Your Password:">
       <b-form-input
         id="input-2"
         v-model="form.password"
         placeholder="Enter Password"
         required
       ></b-form-input>
     </b-form-group>

     <b-button type="submit" variant="primary">Submit</b-button>
   </b-form>
 </div>
</template>

<script>

import { UserService } from '~/services/api.service'
import Alert from '~/components/Alert.vue'
export default {
  name: "register",
  components: {
    Alert,
  },
  data() {
    return {
      form:{
        name: '',
        email: '',
        password: ''
      },
      isPopupVisible: false,
      popupMessage: '',
      popupClass: '',
      show: true
    }
  },
  methods: {
    async submit() {
      UserService.Register(this.form)
        .then((sucess)=>{
          this.showSuccessPopup();
        });

      await this.$router.push('/form');
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

