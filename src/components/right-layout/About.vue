<template>
    <div class="">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <h2 v-if="isMobile" class="
                border-2 border-blue-900 rounded-lg
                noto-h2
            ">
                {{ data.section }}
            </h2>

            <div
                v-for="paragraph in data.text"
                class="justify-center"
            >
                <p> {{ paragraph }} </p>
            </div>
        </div>



    </div>
</template>

<script setup>
import { smallDisplayCheck } from '@/composables/displayCheck.js';
import { useJsonFetch } from '@/composables/useJsonFetch.js';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/about.json');

const isMobile = smallDisplayCheck();

</script>