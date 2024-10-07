<template>
    <overlay-component>
        <template v-slot:icon>
            <slot name="loader-icon">
                <PurpleSpinLoaderIcon />
            </slot>
        </template>
    </overlay-component>
</template>

<script setup>
import OverlayComponent from '../overlay/OverlayComponent.vue';
import PurpleSpinLoaderIcon from '../loader-icons/SpinLoaderIcon.vue';
</script>