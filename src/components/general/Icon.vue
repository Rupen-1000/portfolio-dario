<template>

    <component :is="iconComponent" class="social-icons" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Dynamically import the SVG with path
const iconComponent = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`));
</script>

<style scoped>

</style>