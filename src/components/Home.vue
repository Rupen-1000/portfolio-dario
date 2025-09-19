<!-- <template>
    <div class="default_image"> 
      <img src="@/assets/under_contruction.png" alt="default image" width="100%" height="auto">
    </div>
</template> -->

<!-- 
Before working on individual blocks, start with separating the view space, both for mobile and desktop view. DONE!!!
  - Remember to remove the boxes after finishing editing. Tinker with exact sizes after you have put in the content! DONE!!!
Then get the icons. Setup the files necessary for it. DONE!!!

See how you can create that shadow effect and put it in assests as it'll be used everywhere. 

-->

<template>
  <!--  -->
  <!--
    Wrapper for the whole layout.
    Note: 
      - Contain the width of the display content and control the x margin
  -->
  <div class="
          border-2 border-purple-500 rounded-lg
          flex flex-col lg:flex-row items-end lg:items-center
          min-h-screen w-full
          pt-6 pb-0
          px-6 lg:px-5
          lg:max-w-[90rem] lg:mx-auto
  ">
    <!-- Container shows either top bar or nav bar depending on the view. -->
    
    <!-- This is for the Top Bar -->
    <div v-if="isMobile" class="
            flex flex-col
            items-end justify-end-safe
            w-full
            mt-2 mb-6 p-1
    ">
      <TopBar/>
    </div>
    
    <!-- This is for the Nav Bar -->
    <div v-else class="
            flex-1 flex-row
            items-start
            p-5 w-full h-full
            lg:mr-5
    ">
       <NavBar/>
    </div>

    <!-- This is for the Main Content area. -->
    <!-- Content area is scrollable but only for screens >lg -->
    <div class="
            border-1 border-green-500 rounded-lg 
            flex-1
            p-4 lg:p-8 
            w-full h-full
            lg:h-full
    ">
      <Content/>
    </div>
  </div>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { computed } from 'vue';
import TopBar from '@/components/TopBar.vue';
import NavBar from '@/components/NavBar.vue';
import Content from '@/components/Content.vue';

// NOTE: Maybe move this to a Js file and import if same variable used across multiple components.
// Standard Tailwind CSS breakpoints as a reference.
const breakpoints = useBreakpoints(breakpointsTailwind);

// Create a reactive variable that is true for a mobile-sized viewport.
const isMobile = breakpoints.smaller('lg');

</script>


<style scoped>

</style>
