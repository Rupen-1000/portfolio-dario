<!-- TO render the Name, Title and Qoute -->
<template>
<!-- 
name
title
qoute 
-->
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <h1> {{ data.name }} </h1>
            <h2> {{ data.title }}</h2>
            <h3> {{ data.quote }}</h3>
        </div>
    </div>
</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/profile.json');
</script>