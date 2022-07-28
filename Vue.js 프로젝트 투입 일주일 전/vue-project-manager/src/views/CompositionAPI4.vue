<template>
  <div>
    <h2>Calculaor</h2>
    <div>
      <input type="number" v-model="num1">
      <span> + </span>
      <input type="number" v-model="num2">
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>
<script>
import { plusCalculator } from '../common.js'

export default {
  name: 'calculaor',
  setup () {
    const { num1, num2, result } = plusCalculator()
    return {
      num1, num2, result
    }
  }
}
</script>