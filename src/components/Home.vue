<template>
  <!-- Wrapper for the whole layout. -->
  <div class="
          flex flex-col lg:flex-row justify-between items-stretch
          min-h-screen lg:h-screen w-full
          pt-6 pb-0
          px-6 md:px-10 lg:px-8
          max-w-[1440px] mx-auto

  ">
    <!-- Container shows either top bar or nav bar depending on the view. -->
    
    <!-- The Top Bar -->
    <div v-if="isMobile" class="
            flex flex-col
            items-end justify-end-safe
            w-full
            mt-2 mb-6 p-1
    ">
      <TopBar/>
    </div>
    
    <!-- The Nav Bar -->
    <div v-else class="
            flex flex-col justify-between
            min-w-[300px]           
            flex-shrink-0
            flex-1
            h-full
            pr-5 pl-5 pt-2
    ">
       <NavBar/>
    </div>

    <!-- The Main Content -->
    <!-- Content area is scrollable but only for screens >lg -->
    <div class="
          flex-1 flex-shrink-1
          pt-5 md:pt-10
          lg:pr-2 lg:pl-2 lg:pt-2 
          h-full
          lg:max-w-[600px]
          overflow-y-auto
          scrollbar-hide
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

<!-- Tailwind config or CSS -->
<style scoped> 

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>