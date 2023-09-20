
<template>
  <div>
    <h1>Listing Page</h1>
    <b-table :items="formDataList"></b-table>
  </div>
</template>

<script>
export default {
  computed: {
    formDataList() {
      console.log(this.$store.state.form.formData);
      return this.$store.state.form.formData
      //return this.$store.state.formData;
    },
  },
};
</script>
