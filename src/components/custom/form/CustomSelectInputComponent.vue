<template>
  <div class="form-field">
    <label v-show="showLabel" for="category">{{ props.label }}</label>
    <select
      :disabled="props.disabled"
      v-model="editableValue"
      :id="props.name"
      :name="props.name"
      class="form-control"
      v-bind="$attrs"
    >
      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  name: String,
  label: String,
  showLabel: { type: Boolean, default: true },
  value: { String, required: true },
  disabled: { type: Boolean, default: false },
  options: { type: [Object], required: true },
});

const emit = defineEmits(["onChangeValue", "update:value"]);

const editableValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("update:value", value);
    emit("onChangeValue", value);
  },
});
</script>
