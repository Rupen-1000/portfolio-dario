<!-- TO render the Name, Title and Qoute -->
<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>

            <h1 class="
                noto-h1 text-shadow-sm text-right
                text-3xl md:text-5xl
                lg:text-[clamp(2rem,2vw+0.5rem,3rem)]
                md:-mb-1
                lg:text-left lg:noto-h1 [font-weight:700]
                [letter-spacing:0.1rem]
                lg:mb-1 lg:items-start">
                {{ data.name }}
            </h1>

            <h2 class="
                text-lg md:text-xl lg:text-[clamp(1.5rem,1.5vw+0.5rem,2rem)] 
                noto-h2 text-shadow-sm text-right
                lg:text-left lg:noto-h2 [font-weight:500]
                lg:items-start
            "> 
                {{ data.title }}
            </h2>
            
            <h3 class="
                w-3/4 ml-auto lg:ml-0 lg:mr-0
                text-md md:text-xl lg:text-[clamp(1rem,1vw+0.4rem,1.5rem)]
                noto-h3 font-[300] text-shadow-sm text-right
                mt-2 md:mt-3
                lg:w-full
                lg:text-left
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