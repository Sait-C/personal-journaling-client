<template>
  <WalletMultiButton dark />
</template>

<script setup>
import { useWallet } from "solana-wallets-vue";
import { WalletMultiButton } from "solana-wallets-vue";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const wallet = computed(() => {
  const { publicKey } = useWallet();

  if (publicKey && publicKey.value) {
    console.log("Wallet connected: ", publicKey.value.toBase58());
    return publicKey.value.toBase58();
  }

  console.log("Wallet not connected?? ", publicKey);
  return null;
});

watch(wallet, async (currentValue) => {
  if (currentValue) {
    // Wallet connected logic
    // Init User if it has not initialized yet
    router.push({ name: "diary.diaries" });
  } else {
    router.push({ name: "home" });
  }
});
</script>
