<template>
  <input type="text" v-model="keyword" placeholder="검색어를 입력해주세요.." @keyup.enter="search">
  <button type="button" @click="search">검색</button>
</template>
<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      alert(`검색 키워드: ${this.keyword}`)
    }
  }
}
</script>
