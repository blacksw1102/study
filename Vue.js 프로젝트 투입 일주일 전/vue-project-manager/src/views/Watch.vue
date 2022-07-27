<template>
  <label>FirstName: <input type="text" v-model="firstName"></label><br>
  <label>LastName: <input type="text" v-model="lastName"></label><br>
  <h1>Full Name: {{fullName}}</h1>
</template>
<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      fullName: ''
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }
}
</script>
