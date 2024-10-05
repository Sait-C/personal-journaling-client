<template>
  <div id="list-of-diaries" class="container">
    <div ref="preview" class="preview">
      <div ref="preview-img" class="preview-img"></div>
    </div>
    <div class="diary" id="list-header">
      <div class="title"><p>Title</p></div>
      <div class="month"><p>Month</p></div>
      <div class="day"><p>Day</p></div>
      <div class="year"><p>Year</p></div>
    </div>
    <div
      v-for="diary in diaries"
      :key="diary.id"
      class="diary"
      @mousemove="onMouseMoveDiary"
      @mouseleave="onMouseLeaveDiary"
      @click="onDiaryClick(diary)"
    >
      <div class="title">
        <p>{{ diary.title }}</p>
      </div>
      <div class="month">
        <p>{{ diary.month }}</p>
      </div>
      <div class="day">
        <p>{{ diary.day }}</p>
      </div>
      <div class="year">
        <p>{{ diary.year }}</p>
      </div>
      <div class="hover-reveal-image">
        <img :src="diary.image" :alt="diary.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { gsap } from "gsap";
import { useWorkspace } from "@/composables/useWorkspace";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const { wallet } = useWorkspace();
const diaries = computed(() => store.getters["diary/getDiaries"]);

const onDiaryClick = async (diary) => {
  await store.dispatch("diary/setCurrentDiary", diary);
  console.log(diary);
  router.push({ name: "diary.details" });
};

onMounted(async () => {
  await store.dispatch("diary/fetchDiaries", wallet.value.publicKey.toBase58());
});

function onMouseMoveDiary(el) {
  const image = el.target.querySelector(".hover-reveal-image");
  gsap.to(image, {
    opacity: 1,
    y: "-50%",
    x: "-100%",
    rotate: "5deg",
    duration: 0.5,
    delay: 0,
    scale: 1.1,
    left: el.clientX,
    ease: "ease-in-out",
  });
}

function onMouseLeaveDiary(el) {
  const image = el.target.querySelector(".hover-reveal-image");
  gsap.to(image, {
    opacity: 0,
    duration: 0.5,
    delay: 0,
    y: "-50%",
    x: "-50%",
    rotate: "-5deg",
    scale: 0.8,
    ease: "ease-in-out",
  });
}
</script>
