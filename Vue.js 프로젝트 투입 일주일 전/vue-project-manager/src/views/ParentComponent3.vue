<template>
  <ChildComponent @send-message="sendMessage" ref="child_component" />
  <button type="button" @click="changeChildData">Change Child Data</button>
</template>
<script>
import ChildComponent from './ChildComponent3'

export default {
  components: {
    ChildComponent
  },
  methods: {
    changeChildData () {
      this.$refs.child_component.msg = 'test'
    }
  }
}
</script>