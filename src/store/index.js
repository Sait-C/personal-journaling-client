import { createStore, createLogger } from "vuex";

import setting from "./setting";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    setting: setting,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
