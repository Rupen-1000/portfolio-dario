<template>
    <router-link to="/">
        <div class="
                relative flex items-center 
                group lg:mt-0
        ">
            <Icon 
                :name="'back-arrow'" 
                class="
                    back-arrow-dim arrow-shadow-effect hover-shadow
            "/>

            <h3 class="
                    lg:text-[clamp(0.825rem,1vw+0.5rem,1.2rem)] text-sm 
                    noto-links text-shadow-sm lg:text-left
                    inline-block 
                    transition-all duration-200 text-shadow-hover
            ">
                HOME
            </h3>
            
        </div>

    </router-link>
</template>

<script setup>

import Icon from '@/components/general/Icon.vue';

</script>