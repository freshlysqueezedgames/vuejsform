
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const person = new Vuex.Store({
  state:
  {
    firstName: '',
    lastName: '',
    age: '',
    mobileNumber: '',
    emailAddress: '',
    dateOfBirth: null,
    customerQuery: ''
  },

  getters: {
    getFirstName: state => {
      return state.firstName
    },

    getLastName: state => {
      return state.lastName
    },

    getAge: state => {
      return state.age
    },

    getMobileNumber: state => {
      return state.mobileNumber
    },

    getEmailAddress: state => {
      return state.emailAddress
    },

    getDateOfBirth: state => {
      return state.dateOfBirth
    },

    getCustomerQuery: state => {
      return state.customerQuery
    }
  },

  mutations: {
    save (state, payload) {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.age = payload.age
      state.mobileNumber = payload.mobileNumber
      state.emailAddress = payload.emailAddress
      state.dateOfBirth = payload.dateOfBirth
      state.customerQuery = payload.customerQuery
    }
  },

  actions: {
    save ({commit, state}, products) {
      commit('save', products)
    }
  }
})

export default person
