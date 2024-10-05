import { createStore, createLogger } from "vuex";

import setting from "./setting";
import solana from "./solana";
import diary from "./diary";
import userProfile from "./userProfile";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    setting: setting,
    solana: solana,
    diary: diary,
    userProfile: userProfile,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
