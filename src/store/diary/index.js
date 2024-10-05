import { fetchDiaries } from "@/api/fetch-diaries";

export default {
  namespaced: true,

  state() {
    return {
      diaries: [],
      currentDiary: null,
    };
  },

  mutations: {
    setDiaries(state, payload) {
      state.diaries = payload;
    },
    setCurrentDiary(state, payload) {
      state.currentDiary = payload;
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
    setCurrentDiary({ commit }, payload) {
      commit("setCurrentDiary", payload);
    },
    clearDiaries({ commit }) {
      commit("setDiaries", []);
    },
  },

  getters: {
    getDiaries(state) {
      return state.diaries;
    },
    getCurrentDiary(state) {
      return state.currentDiary;
    },
  },
};
