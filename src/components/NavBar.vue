 <!-- Stays on the left side in larger screens 
 - Has portfolio picture 
 - Profile component
 - Nav links
    - Publications link
 - Social component

 In this order!
 -->

<template>
    <div class="portfolio-image">
        <h1> Here is an image!</h1>
    </div>

    <div class="profile">
        <Profile/>
    </div>

    <div class="nav-links">

    </div>

    <div class="socials">
        <Socials/>
    </div>

</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import Profile from './left-layout/Profile.vue';
import Socials from './left-layout/Socials.vue'

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/profile.json');
</script>