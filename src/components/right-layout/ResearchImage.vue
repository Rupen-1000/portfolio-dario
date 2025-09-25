<template>
    <div v-if="!isMobile"
        class="
            flex items-center justify-center
            overflow-hidden flex-shrink-0"
        :class="expanded 
            // Expand
            ? 'w-[clamp(300px,10vw+250px,400px)] h-[clamp(200px,10vw+100px,300px)]'
            // Contract
            : 'w-[clamp(200px,2vw+50px,150px)] h-[clamp(150px,2vw+50px,120px)]'"
    >
        <img :src="'/images/' + researchItem.image" 
            class="w-full h-full object-contain object-center"
        />
    </div>
</template>

<script setup>
import { smallDisplayCheck } from '@/composables/displayCheck.js';

defineProps({
  researchItem: {
    type: Object,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  }
});

const isMobile = smallDisplayCheck();

</script>