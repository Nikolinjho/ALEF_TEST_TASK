import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
   state: {
    inputData: [
      {
        id: 0,
        title: 'Имя',
        field: 'name'
      },
      {
        id: 1,
        title: 'Возраст',
        field: 'age'
      },

    ],
    info: {}
   },
   getters: { 
    getInputData: (state) => state.inputData,
    info: state => state.info
  },
   actions: {
    updateInfo(context, info){
      context.commit('setInfo', info)
    },
   },
   mutations: {
     setInfo(state, payload){
        state.info = payload
     }
   }
})

