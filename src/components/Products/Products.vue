<template>
  <div class="produts">
        <h3>Products</h3>
      <!-- list of all products -->
        <ul >
            <ProductItem v-for="product of products" :key="product.id"
                        :product="product"/>
        </ul>
      <!-- Add Product -->
        <button @click.prevent="ToggleAddProduct=!ToggleAddProduct">
          {{ToggleAddProduct
                ?'Hide form'
                :'Add a new item +'
            }}
        </button>
        <!-- form for adding product -->
        <template v-if="ToggleAddProduct">
            <product-form/>
        </template>
      
  </div>
</template>

<script>
import ProductForm from './ProductForm'
import ProductItem from './ProductItem'
import {mapState} from 'vuex'
export default {
    data: () => ({
      ToggleAddProduct: false
    }),
    computed:{
        ...mapState(['products'])
    },

    components:{
        ProductForm,
        ProductItem
    },
    
}
</script>

<style lang="scss" scoped>
.produts{
    margin-top: 30px;
    ul{
        margin: 5px auto;
        text-align:center;
        padding: 0 !important;
        width: 80%;
    }
}
</style>