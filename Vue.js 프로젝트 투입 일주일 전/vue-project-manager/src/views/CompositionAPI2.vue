<template>
  <div>
    <h2>Calculator</h2>
  </div>
  <div>
    <input type="number" v-model="state.num1">
    <span> + </span>
    <input type="number" v-model="state.num2">
    <span> = </span>
    <span>{{state.result}}</span>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'

export default {
  name: 'calculator',
  setup () {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => state.num1 + state.num2)
    })
    return {
      state
    }
  }
}
</script>