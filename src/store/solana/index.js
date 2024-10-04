export default {
  namespaced: true,

  state() {
    return {
      wallet: null,
    };
  },

  mutations: {
    setWallet(state, payload) {
      state.wallet = payload;
    },
  },

  actions: {
    setWallet({ commit }, payload) {
      if (typeof payload !== typeof undefined) {
        commit("setWallet", payload);
      }
    },
  },

  getters: {
    getWallet(state) {
      return state.wallet;
    },
  },
};
