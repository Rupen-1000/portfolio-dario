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
        
        <PortfolioImage class="ml-2"/>

        <!-- Container for Profile -->
        <div class="profile">
            <Profile/>
        </div>
        
        <!-- Container for Navigation -->
        <div class="
                space-y-3 flex-none
                mt-10
        ">
            <a href="" class="block group">
                <h3 class="
                        text-[clamp(0.825rem,1vw+0.5rem,1.2rem)]
                        noto-links text-shadow-sm text-left
                        text-shadow-hover
                "> 
                    ABOUT
                </h3>
            </a>

            <a href="" class="block group">
                <h3 class="
                        text-[clamp(0.825rem,1vw+0.5rem,1.2rem)]
                        noto-links text-shadow-sm text-left
                        text-shadow-hover
                "> 
                    RESEARCH
                </h3>
            </a>
            
            <PublicationLink class="block"/>
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