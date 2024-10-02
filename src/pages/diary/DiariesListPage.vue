<template>
  <MainLayout>
    <template v-slot:content>
      <div id="diaries-list-page">
        <UserProfileOverviewComponent />
        <DiariesListComponent />
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
import UserProfileOverviewComponent from "@/components/partials/user/UserProfileOverviewComponent.vue";
import MainLayout from "@/layouts/main/MainLayout.vue";
import DiariesListComponent from "@/components/partials/diary/DiariesListComponent.vue";
</script>
