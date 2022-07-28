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

import { reactive, computed, toRefs } from 'vue'

function plusCalculator () {
  const state = reactive({ // reactive를 통해서 실시간 변경사항을 반영
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2) // reactive가 일어나는 순간 computed를 통해 result 값 갱신
  })
  return toRefs(state) // reactive로 선언한 값들을 외부 function에서도 사용할 수 있도록 toRefs 적용
}

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