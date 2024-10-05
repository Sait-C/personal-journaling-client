export default {
  namespaced: true,

  state() {
    return {
      userProfile: null,
    };
  },

  mutations: {
    setUserProfile(state, payload) {
      state.userProfile = payload;
    },
  },

  actions: {
    setUserProfile({ commit }, payload) {
      commit("setUserProfile", payload);
    },
  },

  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
  },
};
