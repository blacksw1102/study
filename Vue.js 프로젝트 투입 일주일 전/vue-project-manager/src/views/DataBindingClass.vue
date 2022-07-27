<template>
  <label><input type="radio" v-bind:value="true" v-model="isActive">isActive: true</label>
  <label><input type="radio" v-bind:value="false" v-model="isActive">isActive: false</label>
  <br>
  <label><input type="radio" v-bind:value="true" v-model="hasError">hasError: true</label>
  <label><input type="radio" v-bind:value="false" v-model="hasError">hasError: false</label>
  <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
    Class Binding
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: true
    }
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>