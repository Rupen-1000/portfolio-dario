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

        <a href="" target="_blank">
            <div class="relative flex items-center group">
                <h3 class="
                        text-lg
                        noto-links font-effect text-left
                        inline-block
                ">
                    PUBLICATIONS 
                </h3>
                
                <Icon :name="'diagonal-arrow'" class="arrow"/>
            </div>

        </a>
        
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
import Profile from './left-layout/Profile.vue';
import Socials from './left-layout/Socials.vue'

// Load file using the composable
import Icon from '@/components/general/Icon.vue';

// Load file using the composable
// const { data, loading, error } = useJsonFetch('/content/socials.json');
</script>