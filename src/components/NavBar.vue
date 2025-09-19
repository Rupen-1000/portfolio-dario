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
    <div class="space-y-4 flex-none">
        <PortfolioImage/>

        <!-- Container for Profile -->
        <div class="profile">
            <Profile/>
        </div>
        
        <!-- Container for Navigation -->
        <div class="
                navigation
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
    </div>
    <!-- Container for Social links -->
    <!-- NOTE:
    - The margin needs to change after the other contents are filled in
    
    -->
    <div class="
            w-1/3 mb-6
    ">
        <Socials/>
    </div>

</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import Profile from '@/components/left-layout/Profile.vue';
import Socials from '@/components/left-layout/Socials.vue'
import PublicationLink from '@/components/left-layout/PublicationLink.vue';
import PortfolioImage from '@/components/left-layout/PortfolioImage.vue';

</script>