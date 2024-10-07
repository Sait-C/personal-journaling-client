<template>
  <div id="primary-navigation">
    <router-link id="logo" :to="{ name: 'home' }">
      <img src="../../../assets/images/logo.png" alt="Logo" />
    </router-link>
    <nav aria-labelledby="primary-navigation" id="nav-menu">
      <div id="links">
        <router-link v-if="wallet" :to="{ name: 'diary.new' }" class="nav-link"
          >Write Diary</router-link
        >
        <router-link v-if="wallet" :to="{ name: 'diary.diaries' }" class="nav-link"
          >See Your All Diaries</router-link
        >
        <WalletConnectComponent />
      </div>
    </nav>
  </div>
</template>

<script setup>
import WalletConnectComponent from "@/components/solana/WalletConnectComponent.vue";
import { useWorkspace } from "@/composables/useWorkspace";

const { wallet } = useWorkspace();
</script>
