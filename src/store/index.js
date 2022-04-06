import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks:[
      {id: 1, title:"go to supermarket", done: false } ,

    ]
  },
  getters: {},
  mutations: {
    addTask(state,title){
      if(title){
        state.tasks.push({
          id: new Date().getTime(),
          title,
          done: false
        })
      }
    },
    removeTask(state,id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    }
  },
  actions: {},
  modules: {},
});
