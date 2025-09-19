<!-- TO render the Name, Title and Qoute -->
<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>

            <h1 class="
                border-2 border-blue-900 rounded-lg
                noto-h1 font-effect text-right
                text-3xl md:text-5xl
                lg:text-[clamp(1rem, 1.964vw + 0.607rem, 2.375rem)]
                md:-mb-1
                lg:text-left lg:noto-h1 [font-weight:700]
                [letter-spacing:0.1rem]
                lg:mb-1 lg:items-start">
                {{ data.name }}
            </h1>

            <h2 class="
                border-2 border-blue-700 rounded-lg
                text-lg md:text-xl lg:text-[clamp(1.5rem,2vw,4rem)] lg:max-w-[30ch]
                noto-h2 font-effect text-right
                lg:text-left lg:noto-h2 [font-weight:500]
                lg:items-start
            "> 
                {{ data.title }}
            </h2>
            
            <h3 class="
                border-2 border-blue-400 rounded-lg
                w-3/4 ml-auto lg:ml-0 lg:mr-0
                text-md md:text-xl lg:text-[clamp(1.5rem,1vw,3rem)] lg:max-w-[50ch]
                noto-h3 font-effect text-right
                mt-2 md:mt-3
                lg:w-9/10
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