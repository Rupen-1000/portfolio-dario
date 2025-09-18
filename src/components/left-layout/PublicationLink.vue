<template>
    <a href="/publications" target="_blank" rel="noopener noreferrer">
        <div class="
                relative flex items-center 
                group mt-2 lg:mt-0
        ">
            <h3 class="
                    lg:text-lg text-sm 
                    noto-links font-effect lg:text-left
                    inline-block
                    
            ">
                PUBLICATIONS 
            </h3>
            
            <Icon :name="'diagonal-arrow'" class="arrow"/>
        </div>

    </a>
</template>

<script setup>
// Load file using the composable
import Icon from '@/components/general/Icon.vue';

</script>