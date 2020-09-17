import Api from './Api'

export default {
    productType () {
      return Api().get('product_types')
    },
    costumerType () {
      return Api().get('customers')
    },
    products () {
      return Api().get('products')
    }

    
}