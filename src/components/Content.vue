 <!-- 
- Renders the content side (right side)
- About is rendered as is.
- Research components are in the right_layout dir.
 -->

<template>

    <div class="about">
        <About/>
    </div>

    <div class="mt-10">
        <Research/>
    </div>

</template>

<script setup>
import About from '@/components/right-layout/About.vue';
import Research from '@/components/right-layout/Research.vue';

</script>
