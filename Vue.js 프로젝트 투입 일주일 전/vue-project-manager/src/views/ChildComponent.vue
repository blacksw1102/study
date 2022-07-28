<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>
<script>
export default {
  methods: {
    callFromParent () {
      console.log('Call callFromParent~!')
    },
    childFunc () {
      console.log('Call childFunc~!')
    }
  }
}
</script>