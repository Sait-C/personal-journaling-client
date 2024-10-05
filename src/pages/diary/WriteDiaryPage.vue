<template>
  <OutContentLoaderComponent :active="isLoading"/>

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
          <div id="form-fields">
            <CustomTextInputComponent
              placeholder="Diary Title"
              class="hover-disable"
              name="title"
              label="Diary Title"
              :showLabel="false"
              autocomplete="none"
              v-model:value="formData.title"
            />
            <div class="file-input">
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                hidden
                @change="onImageFileInputChange"
                ref="imageFileInput"
              />
              <label for="image" id="image-selector">
                <ri-image-circle size="16"></ri-image-circle>
                <span>Add Image</span>
              </label>
              <div
                v-for="image in uploadedImages"
                :key="image.src"
                class="uploaded-image"
              >
                <img :src="image.src" alt="Uploaded Image" />
                <ri-close-circle
                  size="16"
                  class="close-icon"
                  @click="removeFromList(image)"
                />
              </div>
            </div>
          </div>
          <button
            v-if="!isLoading"
            type="submit"
            class="btn btn-with-icon"
            id="add-button"
          >
            <span><ri-file-add size="20" /> Add</span>
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
import OutContentLoaderComponent from "@/components/custom/loader/OutContentLoaderComponent.vue";
import CustomTextInputComponent from "@/components/custom/form/CustomTextInputComponent.vue";
import CustomAutoResizeTextareaComponent from "@/components/custom/form/CustomAutoResizeTextareaComponent.vue";

import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import { useAsyncState } from "@vueuse/core";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { sendDiary } from "@/api/send-diary";

const toast = useToast();

const uploadedImages = ref([]);
const imageFileInput = ref();

const onImageFileInputChange = () => {
  const selectedFile = !!imageFileInput.value.files.length;
  if (selectedFile) {
    const file = imageFileInput.value.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImages.value.push({
        src: e.target.result,
        file: file,
      });
    };
    reader.readAsDataURL(file);
  }
};

const removeFromList = (imageToDelete) => {
  uploadedImages.value = uploadedImages.value.filter((image) => {
    return image.src != imageToDelete.src;
  });
  imageFileInput.value.value = "";
};

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
    file: uploadedImages.value[0]?.file || null,
  };

  const response = await sendDiary(
    payload.content,
    payload.title,
    payload.file
  );
  if (response.success) {
    toast.success(`'${payload.title}' is successfully saved`);
  } else if (response.error) {
    console.error(response.error);
    if (response.error.message) {
      toast.error(response.error.message);
    } else {
      toast.error("You have already wrote a diary for today!");
    }
  }
};
</script>
