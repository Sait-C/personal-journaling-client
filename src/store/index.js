import { createStore, createLogger } from "vuex";

import setting from "./setting";
import solana from "./solana";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    setting: setting,
    solana: solana,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
