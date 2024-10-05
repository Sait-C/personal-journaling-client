<template>
  <MainLayout>
    <template v-slot:content>
      <div id="home-page" class="container">
        <h1 id="title">
          <span v-if="!wallet">YOU NEED TO CONNECT TO START TO WRITE</span
          ><span v-if="wallet">If you haven't written your diary today, write it now.</span>
        </h1>
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/main/MainLayout";
import { useWorkspace } from "@/composables/useWorkspace";

const { wallet } = useWorkspace();
</script>

<style scoped></style>
