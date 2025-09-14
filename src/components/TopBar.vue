 <!-- Stays on top of the landing page for mobile screens. Only rendered when in mobile devices! 
 - Profile component
 - Social component
 - Publications link

 In this order! 
 -->

<template>

    <div class="profile">        
        <Profile/>
    </div>

    <div class="socials">
        <Socials/>
    </div>

    <div class="publication">

    </div>
 </template>

<script setup>
import Profile from '@/components/left-layout/Profile.vue';
import Socials from '@/components/left-layout/Socials.vue';
</script>