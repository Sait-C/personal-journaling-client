<template>
  <MainLayout>
    <template v-slot:content>
      <router-view />
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/main/MainLayout.vue";
</script>
