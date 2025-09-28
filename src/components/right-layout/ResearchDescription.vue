<template>
    <div class="
            flex-1"
            :class="{'mt-3':expanded}"
    >
        <!-- Research Title -->
        <h2 v-katex class="
            noto-h2 font-[450] text-shadow-sm
            text-[clamp(1rem,1vw+0.35rem,1.25rem)]
            md:text-[clamp(1.75rem,2vw+0.8rem,3.5rem)]
            lg:text-[clamp(0.725rem,1vw+0.3rem,1.15rem)]
            text-left
            mb-2 px-1

        ">
            {{ researchItem.title }}
        </h2>

        <!-- Research Description -->
            <!-- Expanded view -->
        <div v-if="expanded" class="relative text-left">
            <!-- Expanded description -->
            <div v-for="(paragraph, idx) in researchItem.description" :key="idx"
                class="
                    noto-h3 font-[350]  lg:font-[400]
                    text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                    md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                    lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                    text-shadow-md px-1 mb-2

                ">
                <p v-katex class="inline">
                    {{ paragraph }}
                </p>
            </div>
            
            <!-- Read more: External link/s -->
            <div class="px-1">
                <!-- Description -->
                <p
                    class="
                        noto-h3 font-[350] lg:font-[400]
                        text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                        md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                        lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                        text-shadow-md inline
                "> 
                    {{ researchItem.external_links.preceed_desc }}
                </p>
                
                <!-- Link/s -->
                <a 
                    v-for="(link, index) in researchItem.external_links.links"
                    :key="index"
                    :href="link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                        noto-h3 font-[350] lg:font-[400]
                        text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                        md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                        lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                        transition-all duration-200 
                        text-shadow-sm only-text-shadow-hover
                ">
                    [{{ index+1 }}]
                </a>
            </div>
            <!-- Revert to contracted view -->
            <button
                @click="emit('toggle-expand')"
                class="
                    noto-h3 font-[350] lg:font-[400]
                    text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                    md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                    lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                    px-1 transition-all duration-200 
                    text-shadow-sm only-text-shadow-hover
            ">
                less...
            </button>
        </div>
        <!-- Contracted View -->
        <div v-else class="relative">
            <p v-katex class="
                noto-h3 font-[350] lg:font-[400]
                text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                text-shadow-md line-clamp-3 px-1 text-left
                
            ">
                {{ researchItem.description[0] }}
            </p>

            <button
                @click="emit('toggle-expand')"
                class="
                    noto-h3 font-[350] lg:font-[400]
                    text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                    md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                    lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                    px-1 transition-all duration-200
                    text-shadow-sm only-text-shadow-hover
                ">
                    more...
            </button>
        </div>
    </div>
</template>

<script setup>

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

const emit = defineEmits(['toggle-expand'])

</script>