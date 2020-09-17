<template>
  <div class="add_product">
    <v-select
        v-model="product"
        :items="Array.from(filteredProducts, el => el.name)"
        label="Product"
        required
    ></v-select>
    <button @click.prevent="ToggleType=!ToggleType"
            class="btn btn-type">
                {{ToggleType ? 'Hide' : 'Show'}}
    </button>
    <!-- aditional properety -->
    <template v-if="ToggleType">
        <v-select
            v-model="type"
            :items="Array.from(products_data, el => el.type)"
            label="Type"
            required
        ></v-select>
    </template>
    
    <v-text-field v-model="amount" label="Amount" type='number' ></v-text-field>
    <v-text-field v-model="price" label="Price" type='number' ></v-text-field>
    <!-- add item -->
    <button class="btn btn-add" @click.prevent="addingItem()" :disabled="!product">
        Add line to order
    </button>
    <!-- clear form -->
    <button class="btn btn-cancel" @click.prevent="cancel()">
        X
    </button>
    <!-- success -->
    <div v-if="modal">
        <modal/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Modal from '../UI/Modal'
export default {
    data: () => ({
        product:'',
        type:'',
        ToggleType: false,
        amount: 1,
        modal:false
        
    }),
    computed:{
        ...mapState(['products_data']),
        // get products that in choised type
        filteredProducts(){
            if(this.type){
                return this.products_data.filter(product => product.type === this.type)
            }
            return this.products_data
        },
        // calculate price by amount and product price
        price(){
            if(this.product){
              const productItem = this.products_data.filter(item => item.name === this.product)
              return productItem[0].price * this.amount  
            }
            return 0
            
        }
        
        
    },
    methods:{
        ...mapActions(['ADD_PRODUCT']),
        // clear form
        cancel(){
            this.product = ''
            this.type = ''
            this.amount = 1
        },
        // send data to store and show seccesful
        addingItem(){
            
            this.modal = true
            setTimeout(() => {
                this.modal = false
            }, 600);
            
            this.ADD_PRODUCT({
                price: this.price,
                amount: this.amount,
                name: this.product
            })
            
            
            this.cancel()
        }
    },
    components:{
        Modal
    }
}
</script>

<style lang="scss" scoped>
.add_product{
    .btn{
        color:#fff;
        padding: 8px 12px;
    }
    .btn-add{
        background:blue;
        
    }
    .btn-cancel{
        background: red;
    }
    .btn-type{
        background: green;
    }
}
</style>