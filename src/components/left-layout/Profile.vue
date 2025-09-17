<!-- TO render the Name, Title and Qoute -->
<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <h1 class="
                text-2xl md:text-5xl noto-h1 font-effect
                flex flex-col items-end 
                -mb-2 md:-mb-1
                lg:text-5xl 
                lg:mb-1 lg:items-start
            "> 
                {{ data.name }}
            </h1>
            <h2 class="
                text-lg md:text-4xl noto-h2 font-effect
                flex flex-col items-end
                lg:items-start
            "> 
                {{ data.title }}
            </h2>
            <h3 class="
                text-sm md:text-2xl noto-h3 font-effect
                flex flex-col items-end
                mt-2 md:mt-3
                lg:items-start
            ">
                {{ data.quote }}
            </h3>
        </div>
    </div>
</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/profile.json');
</script>