 <!-- 
Stays on top of the landing page for mobile screens. Only rendered when in mobile devices! 
 - Profile component
 - Social component
 - Publications link

 In this order! 
 -->

<template>
    <!-- Render the Profile part -->
    <div class="
            w-full
    ">        
        <Profile/>
    </div>

    <div class="pt-4">
        <Socials/>
    </div>

    <PublicationLink/>
 </template>

<script setup>
import Profile from '@/components/left-layout/Profile.vue';
import Socials from '@/components/left-layout/Socials.vue';
import PublicationLink from '@/components/left-layout/PublicationLink.vue';
</script>