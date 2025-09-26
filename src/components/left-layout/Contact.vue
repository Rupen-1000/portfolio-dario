<template>
   <div v-if="loading">Loading...</div>
   <div v-else-if="error">Error: {{ error }}</div>
   <!-- Container for the Contact -->
   <div v-else class="flex items-center space-x-1/2">
      <!-- Socials -->
      <div
         v-for="(platform, idx) in data.social"
         :key="idx"
         class="relative inline-block group p-1 lg:p-2 "
      >
         <!-- Also add error handling -->
         <a 
            :href="platform.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
         >
            <Icon :name="platform['img_name']" 
                  class="social-icons hover-shadow-icon"
            />

         </a>
         
         <!-- Tooltip -->
         <span 
            class="
               absolute top-full left-1/2 transform -translate-x-1/2
               bg-black text-white text-xs 
               py-1 px-2 rounded
               opacity-0 group-hover:opacity-70
               pointer-events-none whitespace-nowrap
            ">
               {{ platform.name }}
         </span>
      </div>
      
      <!-- Email -->
      <div
         class="relative inline-block group p-1 lg:p-2 cursor-pointer"
         @click="copy(data.email)"
      >
            <Icon name="email"
               class="social-icons hover-shadow-icon"/>

            <!-- Tooltip -->
            <span 
               class="
                  absolute top-full left-1/2 transform -translate-x-1/2
                  bg-black text-white text-xs 
                  py-1 px-2 rounded
                  opacity-0 group-hover:opacity-70
                  pointer-events-none whitespace-nowrap
            ">
               Email
            </span>

            <!-- Feedback Tooltip -->
            <span
               v-if="copied"
               class="
                  fixed top-6 lg:top-auto
                  bottom-auto lg:bottom-6
                  left-1/2 -translate-x-1/2 
                  text-xs bg-black text-white px-3 py-1
                  rounded-md"
            >
               Email copied!
            </span>
      </div>
    </div>
 </template>

 <script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import { useClipboard } from '@vueuse/core'
import Icon from '@/components/general/Icon.vue';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/contact.json');

// clipboard
const { copy, copied } = useClipboard()
</script>

