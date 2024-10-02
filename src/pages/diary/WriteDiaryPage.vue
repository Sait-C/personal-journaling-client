<template>
  <div id="write-diary-page">
    <div id="page-header" class="container">
      <h1 class="title">Write your new diary</h1>
      <span class="bottom-text"
        >There is no one in this world who can access your diaries except
        you</span
      >
    </div>
    <div id="creating-section" class="container">
      <form @submit.prevent="submitForm">
        <div id="top-fields">
          <CustomTextInputComponent
            placeholder="Diary Title"
            class="hover-disable"
            name="title"
            label="Diary Title"
            :showLabel="false"
            autocomplete="none"
            v-model:value="formData.title"
          />
          <button
            v-if="!isLoading"
            type="submit"
            class="btn btn-with-icon"
            id="add-button"
          >
            <span><ri-file-add size="28" /> Add</span>
          </button>
        </div>
        <CustomAutoResizeTextareaComponent
          placeholder="How was your day?"
          class="hover-disable"
          name="content"
          label="Diary Content"
          :showLabel="false"
          autocomplete="none"
          v-model:value="formData.content"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import CustomTextInputComponent from "@/components/custom/form/CustomTextInputComponent.vue";
import CustomAutoResizeTextareaComponent from "@/components/custom/form/CustomAutoResizeTextareaComponent.vue";

import { reactive } from "vue";
import { useToast } from "vue-toastification";
import { useAsyncState } from "@vueuse/core";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const toast = useToast();

const formData = reactive({
  title: "",
  content: "",
});

// Validation Rules
const rules = {
  title: {
    required,
  },
  content: {
    required,
  },
};

// Initialize Vuelidate
const v$ = useVuelidate(rules, formData);

// Submit Form Action
const { isLoading, execute: submitForm } = useAsyncState(
  async () => {
    // Validate Form Data
    const result = await v$.value.$validate();
    // Check if validation success
    if (result) {
      await createNewDiary();
    }
  },
  {},
  { immediate: false }
);

const createNewDiary = async () => {
  const payload = {
    title: formData.title,
    content: formData.content,
  };
  toast.success(`'${payload.title}' is successfully saved`);
};
</script>
