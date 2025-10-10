<template>
  <div class="
          min-h-screen lg:h-screen w-full items-stretch
          max-w-[1440px] mx-auto
          pt-6 pl-8 pr-6 
          md:pt-10 md:pl-12 md:pr-8
          lg:pt-15 lg:pl-32 lg:pr-16
  ">
    <HomeLink class="pt-1 inline-block -ml-1"/>
    <!-- Top Header container -->
    <h1 class="
          noto-h1 font-[650] [letter-spacing:0.05rem] 
          text-xl md:text-4xl lg:text-5xl
          text-shadow-sm mt-1
    ">
      Publications
    </h1>

    <div class="
          pt-1
    ">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else>

        <div v-for="year in publicationsSorted"
          :key="year"
        >
          <!-- Container for Year -->
          <h2 class="
              noto-h2 font-[600] 
              text-xl md:text-3xl lg:text-4xl
              text-shadow-sm
              pt-3 pb-6
              md:pt-6 md:pb-10
              lg:pt-12
              
          "> 
            {{ year }} 
          </h2>
          
          <!-- Individual publication containers -->
          <div v-for="article in data[year]"
            :key="article.doi"
            class="
              pb-4 md:pb-6 lg:pb-8

          ">
            <PublicationLayout :article="article"/>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Copyright/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import PublicationLayout from '@/components/publication/PublicationLayout.vue';
import HomeLink from '@/components/publication/HomeLink.vue';
import Copyright from '@/components/right-layout/Copyright.vue';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/publications.json');

// Sort descending by date
const publicationsSorted = computed(() => {
  if (data.value) {
    // Get the keys (years) and sort them numerically in descending order
    return Object.keys(data.value).sort((a, b) => b - a);
  }
  // Return an empty array or null if data is not yet available
  return [];
});
</script>