import { fetchDiaries } from "@/api/fetch-diaries";

export default {
  namespaced: true,

  state() {
    return {
      diaries: [],
    };
  },

  mutations: {
    setDiaries(state, payload) {
      state.diaries = payload;
    },
  },

  actions: {
    async fetchDiaries({ commit, state }, authority) {
      if (state.diaries.length > 0) {
        return;
      }
      await fetchDiaries(authority).then((fetchedDiaries) => {
        commit("setDiaries", fetchedDiaries);
      });
    },
    clearDiaries({ commit }) {
      commit("setDiaries", []);
    },
  },

  getters: {
    getDiaries(state) {
      return state.diaries;
    },
  },
};
