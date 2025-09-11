<!-- <template>
    <div class="default_image"> 
      <img src="@/assets/under_contruction.png" alt="default image" width="100%" height="auto">
    </div>
</template> -->


<template>
  <div class="main-container">
    <div v-if="isMobile" class="top-bar">
      <!-- <h1> Mobile view</h1> -->
      <TopBar/>
    </div>

    <div v-else class="nav-bar">
      <!-- <h1> Desktop view</h1> -->
       <NavBar/>
    </div>

    <div class="content">
      <Content/>
    </div>
  </div>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { computed } from 'vue';
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import Content from './components/Content.vue';

// NOTE: Maybe move this to a Js file and import if same variable used across multiple components.
// Standard Tailwind CSS breakpoints as a reference.
const breakpoints = useBreakpoints(breakpointsTailwind);

// Create a reactive variable that is true for a mobile-sized viewport.
const isMobile = breakpoints.smaller('md'); /* 768px */

</script>


<style scoped>
</style>
