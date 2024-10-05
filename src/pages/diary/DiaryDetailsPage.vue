<template>
  <div id="diary-details-page" v-if="diary">
    <div id="diary-title">{{ diary.title }}</div>
    <div id="diary-date">{{ diary.created_at }}</div>
    <div id="diary-image">
      <img :src="diary.image" :alt="diary.title" />
    </div>
    <div id="diary-content" class="container">
      <p v-html="content"></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const diary = computed(() => store.getters["diary/getCurrentDiary"]);
const content = computed(() => diary.value.content.replace(/\n/g, "<br />"));
</script>
