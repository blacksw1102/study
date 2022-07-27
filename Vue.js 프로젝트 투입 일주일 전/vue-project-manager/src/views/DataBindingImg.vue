<template>
  <div>
    <img v-bind:src="imgsrc" alt="imgSrc">
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgsrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png'
    }
  }
}
</script>