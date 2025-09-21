 <!-- For rendering each publication item -->
<template>
  <div class="p-6">
    <h1 class="
          noto-h1
    ">
      Publications
    </h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <!-- Container for the socials -->
    <div v-else >
      <div v-for="year in publicationsSorted"
        :key="year"
      >
        <h2> {{ year }} </h2>
        
        <div v-for="article in data[year]"
          :key="article.doi"
        >
          <PublicationLayout :article="article"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import PublicationLayout from '@/components/publication/PublicationLayout.vue';

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