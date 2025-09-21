<template>
    <a href="/publications" target="_blank" rel="noopener noreferrer">
        <div class="
                relative flex items-center 
                group mt-2 lg:mt-0
        ">
            <h3 class="
                    lg:text-[clamp(0.825rem,1vw+0.5rem,1.2rem)] text-sm 
                    noto-links text-shadow-sm lg:text-left
                    inline-block text-shadow-hover
                    
            ">
                PUBLICATIONS 
            </h3>
            
            <Icon :name="'diagonal-arrow'" class="arrow hover-shadow"/>
        </div>

    </a>
</template>

<script setup>
// Load file using the composable
import Icon from '@/components/general/Icon.vue';

</script>