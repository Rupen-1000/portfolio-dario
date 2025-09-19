<!-- TO render the Name, Title and Qoute -->
<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <h1 class="
                noto-h1 font-effect text-right
                text-3xl md:text-5xl lg:text-5xl
                md:-mb-1
                lg:text-left lg:noto-h1 [font-weight:700]
                lg:mb-1 lg:items-start
            "> 
                {{ data.name }}
            </h1>
            <h2 class="
                text-lg md:text-xl lg:text-2xl
                noto-h2 font-effect text-right
                lg:text-left lg:noto-h2 [font-weight:500]
                lg:items-start
            "> 
                {{ data.title }}
            </h2>
            <h3 class="
                w-3/4 ml-auto lg:ml-0 lg:mr-0
                text-md md:text-xl 
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