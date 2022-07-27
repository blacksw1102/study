<template>
  <div>
    <label><input type="radio" v-bind:value="'A'" v-model="type"> Type: A</label>
    <label><input type="radio" v-bind:value="'B'" v-model="type"> Type: B</label>
    <label><input type="radio" v-bind:value="'C'" v-model="type"> Type: C</label>
    <br><br>
    <label><input type="radio" v-bind:value="true" v-model="isShow"> isShow: true</label>
    <label><input type="radio" v-bind:value="false" v-model="isShow"> isShow: false</label>

    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1>
    <br><br>
    <h1 v-show="isShow == true">Show Show ~!</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 'E',
      isShow: true
    }
  }
}
</script>