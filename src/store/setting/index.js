export default {
  namespaced: true,

  state() {
    return {
        app_name: "Highly Secure Personal Journaling",
        header_navbar: "default",
        isSiteMenuActive: false,
    };
  },

  mutations: {
    setAppName(state, payload) {
      state.app_name = payload;
    },
    setIsSiteMenuActive(state, payload) {
      state.isSiteMenuActive = payload;
    },
  },

  actions: {
    setAppName({ commit }, payload) {
      if (typeof payload !== typeof undefined) {
        commit("setAppName", payload);
      }
    },
    setIsSiteMenuActive({ commit }, payload) {
      if (typeof payload !== typeof undefined) {
        commit("setIsSiteMenuActive", payload);
      }
    },
  },

  getters: {
    getAppName(state) {
      return state.app_name;
    },
    getIsSiteMenuActive(state) {
      return state.isSiteMenuActive;
    },
  },
};
