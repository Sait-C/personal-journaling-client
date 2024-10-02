<template>
    <div class="overlay d-flex align-items-center justify-content-center" v-if="props.active">
        <slot name="icon" />
    </div>
    </template>
    
    <script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        active: {
            type: Boolean,
            required: true,
            default: false
        }
    })
    </script>
    
    <style scoped lang="scss">
    .overlay {
        background-color: rgba(1, 1, 1, .8);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
    </style>