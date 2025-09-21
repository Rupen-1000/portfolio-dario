<!-- <template>
    <div class="default_image"> 
      <img src="@/assets/under_contruction.png" alt="default image" width="100%" height="auto">
    </div>
</template> -->

<template>
  <!--
    Wrapper for the whole layout.
    Note: 
      - Contain the width of the display content and control the x margin
  -->
  <div class="
          flex flex-col lg:flex-row justify-between items-stretch
          min-h-screen lg:h-screen w-full
          pt-6 pb-0
          px-6 lg:px-8
          max-w-[1440px] mx-auto

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
            flex flex-col justify-between
            min-w-[300px]
            
            flex-shrink-0
            h-full
            pr-5 pl-5 pt-2
    ">
       <NavBar/>
    </div>

    <!-- This is for the Main Content area. -->
    <!-- Content area is scrollable but only for screens >lg -->
    <div class="
          flex-1
          p-4 lg:pr-8 pl-8 pt-8 
          h-full
          lg:max-w-[600px]
          overflow-y-auto
    ">
      <Content/>
    </div>
  </div>
</template>

<script setup>
import { smallDisplayCheck } from '@/composables/displayCheck.js';
import TopBar from '@/components/TopBar.vue';
import NavBar from '@/components/NavBar.vue';
import Content from '@/components/Content.vue';

const isMobile = smallDisplayCheck();

</script>
