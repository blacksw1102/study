<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="i" v-for="(product, i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getList()
  },
  mounted () {
  },
  methods: {
    async getList () {
      this.productList = await this.$api('https://27077b56-28bf-4e77-beee-237935b24a59.mock.pstmn.io/list', 'get')
    }
  }
}
</script>
<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 70%;
    margin: 0 auto;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>