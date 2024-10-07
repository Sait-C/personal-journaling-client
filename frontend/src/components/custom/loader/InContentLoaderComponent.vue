<template>
  <div id="loader" v-if="props.active">
    <slot name="loader-icon">
      <div class="icon">
        <SpinLoaderIcon />
      </div>
    </slot>
  </div>
</template>

<script setup>
import SpinLoaderIcon from "../loader-icons/SpinLoaderIcon.vue";
import { defineProps } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<style scoped>
#loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  position: relative;
  display: block;
}
</style>
