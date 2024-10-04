import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Solona Wallets CSS
import 'solana-wallets-vue/styles.css'

import "./registerServiceWorker";

// Library Components
import BootstrapVue3 from "bootstrap-vue-3";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions = { timeout: 3000 };

// Custom Components & Directives
import globalComponent from "./plugins/global-components";

const app = createApp(App);

app.use(store);
app.use(router);

//Library Components
app.use(BootstrapVue3);
app.use(Toast, toastOptions);

// Custom Components & Directives
app.use(globalComponent);

app.mount("#app");

export default app;
