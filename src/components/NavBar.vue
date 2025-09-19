 <!-- Stays on the left side in larger screens 
 - Has portfolio picture 
 - Profile component
 - Nav links
    - Publications link
 - Social component

 In this order!
 -->

<template>
    <!-- Container for Portfolio image -->
    <div class="
            border-1 border-[#C0C0C0]
            w-100 h-100 rounded-full overflow-hidden
            mb-7
            shadow-lg shadow-gray-300/20
    ">
        <img src="/images/Dario_portfolio.jpg" 
            alt="Portfolio picture"
            class="
                img-face
                w-full h-full
            "
        />
    </div>

    <!-- Container for Profile -->
    <div class="
        profile
    ">
        <Profile/>
    </div>

    <!-- Container for Navigation -->
    <div class="
            mt-10
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

    <!-- Container for Social links -->
    <!-- NOTE:
    - The margin needs to change after the other contents are filled in
    
    -->
    <div class="
            w-1/3 mt-30
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