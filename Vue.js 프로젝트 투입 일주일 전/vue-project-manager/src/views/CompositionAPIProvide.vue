<template>
  <CompositionAPIInject />
</template>
<script>
import { provide } from 'vue'
import CompositionAPIInject from './CompositionAPIInject.vue'

export default {
  components: {
    CompositionAPIInject
  },
  setup () {
    provide('title', 'vue.js 프로젝트')
  }
}
</script>