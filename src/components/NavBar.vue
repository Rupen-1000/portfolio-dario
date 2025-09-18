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

    
    <div class="
        profile
    ">
        <Profile/>
    </div>

    <div class="
            mt-20
    ">
        <a href="" target="_blank">
            <h3 class="
                    text-lg
                    noto-links font-effect text-left
            "> 
                ABOUT
            </h3>
        </a>

        <a href="" target="_blank">
            <h3 class="
                    text-lg
                    noto-links font-effect text-left
            "> 
                RESEARCH
            </h3>
        </a>
        
        <PublicationLink/>
    </div>
    <!-- NOTE:
    - The margin needs to change after the other contents are filled in
    
    -->
    <div class="
            w-1/3 mt-80
    ">
        <Socials/>
    </div>

</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import Profile from '@/components/left-layout/Profile.vue';
import Socials from '@/components/left-layout/Socials.vue'
import PublicationLink from '@/components/left-layout/PublicationLink.vue';

</script>