import Vue from 'vue'
import Vuex from 'vuex'

import {v1} from 'uuid'

import Service from '../services/ProductService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    costumers: [],
    product_types: [],
    products_data:[],
    products:[]
  },
  getter: {

  },
  mutations: {
    SET_LOADING: (state) => {
      state.loading = false
    },
    SET_ERROR: (state, payload) => {
      state.error = payload
    },
    SET_PRODUCT_TYPES: (state, payload) => {
      state.product_types = payload;
    },
    SET_COSTUMER: (state, payload) => {
      state.costumers = payload;
    },
    SET_PRODUCTS_DATA: (state, payload) => {
      state.products_data = payload;
    },
    ADD_PRODUCT: (state, payload) => {
      // push new item
      state.products = [...state.products , {...payload, id: v1()}];
    },
    REMOVE_PRODUCT: (state, payload) => {
      // delete item 
      const index = state.products.findIndex(product => product.id == payload)
      state.products.splice(index, 1);
    },
  },
  actions: {
    // run loading get all product_types
    GET_PRODUCT_TYPES: async (context) => {
      context.commit('SET_LOADING');
      try {
        const product_types = (await Service.productType()).data["hydra:member"]
        
        context.commit('SET_PRODUCT_TYPES', product_types);
      } catch (error) {
        context.commit('SET_ERROR', error);
      }
    },
    // run loading get all costumers
    GET_COSTUMER: async (context) => {
      context.commit('SET_LOADING');
      try {
        const customers = (await Service.costumerType()).data["hydra:member"]
        context.commit('SET_COSTUMER', customers);
      } catch (error) {
        context.commit('SET_ERROR', error);
      }
    },
    // run loading get all product_data
    GET_PRODUCTS_DATA: async (context) => {
      context.commit('SET_LOADING');
      try {
        const products_data = (await Service.products()).data["hydra:member"]
        context.commit('SET_PRODUCTS_DATA', products_data);
      } catch (error) {
        context.commit('SET_ERROR', error);
      }
    },
    ADD_PRODUCT: (context, payload) => {
      context.commit('ADD_PRODUCT', payload)
    },
    REMOVE_PRODUCT: (context, payload) => {
      context.commit('REMOVE_PRODUCT', payload)
    }
  },
  modules: {
  }
})
