<template>
    <div class="
        border-2 border-blue-500 rounded-lg
    ">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <!-- Header -->
            <h2 class="
                border-2 border-blue-200 rounded-lg
                noto-h2 font-[650] text-shadow-sm
                flex justify-center
                lg:justify-start
                text-[clamp(1.25rem,2vw+0.5rem,2.5rem)]
                md:text-[clamp(1.75rem,2vw+0.8rem,3.5rem)]
                lg:text-[clamp(1.25rem,2vw+0.3rem,2rem)]
                mb-4 lg:mb-6
            ">
                {{ data.section }}
            </h2>

            <!-- Content -->
            <div
                v-for="item in data.content"
                class="                
                    justify-center
                    pl-0 md:p-2 lg:pl-2
                    mb-3
            ">
                <ResearchLayout :researchItem="item"/>
            </div>
        
        </div>



    </div>

</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import ResearchLayout from '@/components/right-layout/ResearchLayout.vue';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/research.json');

</script>