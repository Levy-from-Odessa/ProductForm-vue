<template>
  <li>
      <span>Price: {{product.price}}</span>
      <span>Amount: {{product.amount}}</span>
      <span>{{product.name}}</span>
      <span class="btn-delete" @click.prevent="deleteItem()">X</span>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['product'],
    methods:{
        ...mapActions(['REMOVE_PRODUCT']),
        // delete item by id 
        deleteItem(){
            console.log(this.product.id);
            this.REMOVE_PRODUCT(this.product.id)
        }

    }
}
</script>

<style lang="scss" scoped>
li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    border:1px solid #333;
    color: #fff;
    background:rgba(50, 50, 243, 0.644);
    span{
        border-left:1px solid #333;
        padding: 8px 12px;
    }
    .btn-delete{
        background: red;
        cursor: pointer;
    }
}
</style>