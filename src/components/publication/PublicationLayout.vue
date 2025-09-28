<template>
  <div class="
        rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)]
        p-2 lg:p-4
  ">
    <a :href="article.doi" target="_blank" rel="noopener noreferrer" class="inline-block">
      <div class="group">
        <!-- Paper Title -->
        <h3 v-katex class="
              noto-h3 font-[400] 
              text-[clamp(0.825rem,1vw+0.5rem,1.5rem)]
              md:text-[clamp(1rem,2vw+0.4rem,2rem)]
              lg:text-[clamp(1rem,1vw+0.25rem,2rem)]
              text-shadow-sm
              break-words
              transition-all duration-200 text-shadow-hover 
        "> 
          <span class="inline">{{ article.title }}</span>
          <Icon 
            :name="'diagonal-arrow'"
            class="
              out-arrow-dim arrow-shadow-effect hover-shadow 
              inline-block ml-1
          "/>
        </h3>
      </div>
    </a>
    
    <!-- Paper Authors -->
    <h4 class="
          noto-h3 font-[200]
          text-[clamp(0.625rem,1vw+0.5rem,1.5rem)]
          md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
          lg:text-[clamp(1rem,1vw+0.1rem,2rem)]
          text-shadow-sm
    "> 
      {{ article.authors }}
    </h4>

    <!-- Paper Publication name -->
    <h4 class="
          noto-h3 font-[200]
          text-[clamp(0.825rem,1vw+0.5rem,1.5rem)]
          md:text-[clamp(1rem,2vw+0.4rem,2rem)]
          lg:text-[clamp(1rem,1vw+0.15rem,2rem)]
          text-shadow-sm
    "> 
      {{ article.journal }} 
    </h4>
  </div>
</template>


<script setup>
import Icon from '@/components/general/Icon.vue';

defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>
