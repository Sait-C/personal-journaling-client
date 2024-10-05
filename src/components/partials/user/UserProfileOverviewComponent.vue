<template>
  <div id="user-profile-overview">
    <div class="container">
      <div id="user-bottom-info" v-if="userProfile">
        <div class="info">
          <div class="label">Total Diaries</div>
          <div class="value">{{ userProfile.diaryCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const userProfile = computed(() => store.getters["userProfile/getUserProfile"]);
</script>
