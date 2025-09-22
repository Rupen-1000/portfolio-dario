<template>
    <div class="
        border-2 border-red-500 rounded-lg
    ">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <h2 class="
                noto-h2 font-[650] text-shadow-sm
                flex justify-center items-center
                text-[clamp(1.25rem,2vw+0.5rem,2.5rem)]
                md:text-[clamp(1.75rem,2vw+0.8rem,3.5rem)]
                mb-6
            ">
                {{ data.section }}
            </h2>

            <div
                v-for="items in data.research"
                class="
                    
                    justify-center
                    noto-h3 font-[250] lg:font-[400]
                    text-[clamp(0.825rem,2vw+0.5rem,1.5rem)]
                    md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                    lg:text-[clamp(0.825rem,1vw+0.3rem,1.25rem)]
                    text-shadow-md
                    pl-6 md:pl-12 lg:pl-2
                    mb-3
                    
            ">
        
            </div>
        
        </div>



    </div>

</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/research.json');

</script>