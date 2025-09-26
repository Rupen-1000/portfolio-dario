<template>
    <!-- Main container -->
    <div class="
        rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] mx-1 lg:mx-0
        p-2 md:p-5 lg:pl-2 lg:pr-4 lg:py-4 transition-all duration-300 ease-in-out"
        :class="{ 
            'max-h-[350px] lg:h-[200px] overflow-hidden': !expanded
        }"
    >
        <div
            class="flex items-start"
            :class="{ 'flex-col items-center text-center': expanded }"
        >

            <!-- Image container -->
            <ResearchImage 
                :researchItem="researchItem"
                :expanded="expanded"
                :class="expanded?'mx-auto':'mx-0'"
            />
                
            <!-- 
                Container for Title and Description 
            -->
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
                <div v-if="expanded">
                    <div v-for="(paragraph, idx) in researchItem.description" :key="idx"
                        class="
                            noto-h3 font-[350]  lg:font-[400]
                            text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                            md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                            lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                            text-shadow-md px-1 mb-2 text-left

                        ">
                        <p v-katex class="inline">
                            {{ paragraph }}
                            <!-- Only show last paragraph -->
                            <button v-if="idx === researchItem.description.length - 1"
                                    @click="toggleExpand"
                                    class="ml-1 transition-all duration-200 text-shadow-sm ref-shadow-hover">
                                less...
                            </button>
                        </p>

                        <div v-if="idx === researchItem.description.length - 1" class="mt-2">
                            <span class="inline"> {{ researchItem.external_links.preceed_desc }}</span>
                            <span
                                v-for="(link, index) in researchItem.external_links.links"
                                :key="index"
                                class="ml-1"
                                >
                                    <a :href="link" target="_blank"  rel="noopener noreferrer">
                                        <span class="inline transition-all duration-200 text-shadow-sm ref-shadow-hover">[{{ index+1 }}]</span>
                                    </a>
                                </span>
                        </div>
                    </div>
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
                        @click="toggleExpand"
                        class="
                            noto-h3 font-[350] lg:font-[400]
                            text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                            md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                            lg:text-[clamp(0.625rem,1vw+0.3rem,1rem)]
                            px-1 transition-all duration-200 text-shadow-sm ref-shadow-hover
                        ">
                            more...
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ResearchImage from "@/components/right-layout/ResearchImage.vue";

defineProps({
  researchItem: {
    type: Object,
    required: true
  }
});

const expanded = ref(false);

function toggleExpand() {
  expanded.value = !expanded.value;
}

</script>

