import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    location: {
      code: 'LO121',
      name: 'Dublin',
      active: true
    },
    showModal: false
  },
  getters: {
    getLocation: state => {
      return state.location
    },
    getShowModal: state => {
      return state.showModal
    }
  },
  mutations: {
    openModal (state) {
      state.showModal = true
    },
    closeModal (state) {
      state.showModal = false
    }
  },
  actions: {
    openModal (context) {
      context.commit('openModal')
    },
    closeModal (context) {
      context.commit('closeModal')
    }
  }
})
