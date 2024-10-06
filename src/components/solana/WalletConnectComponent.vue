<template>
  <WalletMultiButton dark />
</template>

<script setup>
import { useWorkspace } from "@/composables/useWorkspace";
import { WalletMultiButton } from "solana-wallets-vue";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { useStore } from "vuex";
import { initializeUser } from "@/api/initialize-user";
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useStore();
const router = useRouter();
const { program, wallet } = useWorkspace();

/* const wallet = computed(() => {
  const { publicKey } = useWallet();

  if (publicKey && publicKey.value) {
    console.log("Wallet connected: ", publicKey.value.toBase58());
    return publicKey.value.toBase58();
  }

  console.log("Wallet not connected?? ", publicKey);
  return null;
}); */

watch(wallet, async (currentValue) => {
  if (currentValue && program.value) {
    // Wallet connected logic
    let profileAccount = null;
    // Init User if it has not initialized yet
    try {
      const [profilePda] = await findProgramAddressSync(
        [utf8.encode("USER_STATE"), wallet.value.publicKey.toBuffer()],
        program.value.programId
      );
      console.log(profilePda);
      profileAccount = await program.value.account.userProfile.fetch(
        profilePda
      );
      console.log(profileAccount);
    } catch (error) {
      console.error(error);
    }

    if (profileAccount) {
      await store.dispatch("userProfile/setUserProfile", profileAccount);
      await store.dispatch(
        "diary/fetchDiaries",
        wallet.value.publicKey.toBase58()
      );
      router.push({ name: "diary.diaries" });
    } else {
      console.log("User have not initialized yet!");
      const result = await initializeUser();
      if (result.success) {
        toast.success("Welcome, this diary is a gift from us to you");
      } else {
        toast.error(result.error.message);
      }
    }

    /* router.push({ name: "diary.diaries" }); */
  } else {
    await store.dispatch("userProfile/setUserProfile", null);
    await store.dispatch("diary/clearDiaries");
    router.push({ name: "home" });
  }
});
</script>
