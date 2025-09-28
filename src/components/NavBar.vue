<template>
    <!-- Portfolio image -->
    <div class="space-y-4 flex-none">
        
        <PortfolioImage class="ml-2"/>

        <!-- Profile -->
        <div class="profile">
            <Profile/>
        </div>
        
        <!-- Navigation -->
        <div class="
                space-y-3 flex-none
                mt-10
        ">
            <!-- Container for future, expanded version! -->
            <!-- <a href="" class="block">
                <h3 class="
                        text-[clamp(0.825rem,1vw+0.5rem,1.2rem)]
                        noto-links text-shadow-sm text-left
                        only-text-shadow-hover
                "> 
                    ABOUT
                </h3>
            </a>

            <a href="" class="block">
                <h3 class="
                        text-[clamp(0.825rem,1vw+0.5rem,1.2rem)]
                        noto-links text-shadow-sm text-left
                        only-text-shadow-hover
                "> 
                    RESEARCH
                </h3>
            </a> -->
            
            <PublicationLink class="inline-block"/>
        </div>
    </div>
    
    <!-- Contacts -->
    <div class="
            w-1/3 mb-6
    ">
        <Contact/>
    </div>

</template>

<script setup>
import Profile from '@/components/left-layout/Profile.vue';
import Contact from '@/components/left-layout/Contact.vue'
import PublicationLink from '@/components/left-layout/PublicationLink.vue';
import PortfolioImage from '@/components/left-layout/PortfolioImage.vue';

</script>