export default {
    namespaced: true,//必须加它不然报错
    state: {
      str: 'store_a333'
    },
    mutations: {
      'mod_a.setStr': function (state, s){
        state.str=s;
      }
    },
    actions: {
      'mod_a.setStr': function ({commit}, s){
        commit('mod_a.setStr', s);
      }
    }
  }
