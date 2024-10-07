<template>
  <router-view />
</template>

<script setup>
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { initWallet } from "solana-wallets-vue";
import { initWorkspace } from "@/composables/useWorkspace";

const walletOptions = {
  // wallet providers we want to support
  wallets: [
    new PhantomWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
    new SolflareWalletAdapter(),
  ],
  autoConnect: true,
};
// initialise the global store using the wallets defined
initWallet(walletOptions);
initWorkspace();

// we set the autoConnect option to true so that it will automatically try to reconnect the user's wallet on page refresh.
</script>

<style lang="scss">
@import "./assets/custom-vue/scss/styles";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: $bg-green !important;
}
</style>
