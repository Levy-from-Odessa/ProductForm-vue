<template>
  <v-container>
      <form class="main-form" v-if="!loading ">
         <v-select
            v-model="type"
            :items="Array.from(product_types, el => el.name)"
            label="Type"
            required
          ></v-select>
          <v-select
            v-model="costumer"
            :items="Array.from(costumers, el => el.name)"
            label="Costumer"
            required
          ></v-select>
          <!-- Add adress -->
          <button @click.prevent="ToggleAdress=!ToggleAdress">Add Adress</button>
            <template v-if="ToggleAdress">
              <add-adress/>
            </template>
          <!-- products  -->
          <products/>

          <v-switch v-model="agreeSubmit" label="Are you sure to submit this order?">
          </v-switch>

          <button @click.prevent="submitForm()" :disabled="!agreeSubmit" class="submit">
            Submit
          </button>
      </form>
      <div v-if="loading" style="margin: 10px auto">
        <loader/>
      </div>
      <div v-if="modal">
        <modal/>
      </div>
      
      
  </v-container>
</template>

<script>
import { mapState,  mapActions } from 'vuex'
import AddAdress from './AddAdress'
import Products from './Products/Products'
import Loader from './UI/Loader'
import Modal from './UI/Modal'
  export default {

    data: () => ({
      type: '',
      costumer: '',
      ToggleAdress: false,
      agreeSubmit: false,
      modal:false
    }),
    computed: {
      ...mapState([
        'product_types',
        'costumers',
        'error',
        'loading'
      ])
    },
    mounted() {
      this.GET_PRODUCT_TYPES()
      this.GET_COSTUMER()
      this.GET_PRODUCTS_DATA()
      
    },
    methods:{
      ...mapActions([
        'GET_PRODUCT_TYPES',
        'GET_COSTUMER',
        'GET_PRODUCTS_DATA',
      ]),
      submitForm(){
        this.modal = true
        setTimeout(() => {
          this.modal = false
        }, 600);
      }
    },

    components:{
      AddAdress,
      Products,
      Loader,
      Modal
    }
  }
</script>

<style lang="scss" scoped>
.main-form{
  width: 70%;
  border: 1px solid #333;
  border-radius: 5px;
  background: rgb(125, 200, 223);
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  box-shadow: 1px 1px 1px 1px  rgb(53, 93, 105);

  .submit{
    border-radius:5px ;
    background: honeydew;
    padding:10px 20px;
  }

}
</style>