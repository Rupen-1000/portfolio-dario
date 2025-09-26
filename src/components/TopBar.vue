<template>
    <!-- Render the Profile part -->
    <div class="
            w-full
    ">        
        <Profile/>
    </div>

    <div class="pt-4">
        <Contact/>
    </div>

    <PublicationLink/>
 </template>

<script setup>
import Profile from '@/components/left-layout/Profile.vue';
import Contact from '@/components/left-layout/Contact.vue';
import PublicationLink from '@/components/left-layout/PublicationLink.vue';
</script>