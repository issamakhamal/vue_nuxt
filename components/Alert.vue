<template>
   <div>
     <b-alert show :class="'alert-'+popupClass" fade :variant="popupClass">
       <button class="close" @click="closePopup">Close</button>
       <p>{{ message }}</p>
     </b-alert>
   </div>
</template>


<script>


export default {
  props: {
    message: String,
    popupClass: String,
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
  data: function () {
    return {
    }
  },

}
</script>

<style scoped >
$danger-color: #ff6b6b;
$success-color: #4caf50;
$white-color: #ffffff;
.popup {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  text-align: center;
  &.danger {
    background-color: $danger-color !important;
    color: $white-color !important;
  }

  &.success {
    background-color: $success-color !important;
    color: $white-color !important;
  }
}

</style>
