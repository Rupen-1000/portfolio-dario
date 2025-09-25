<template>
    <!-- Main container -->
    <div class="
        rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)]
        p-2 md:p-5 lg:pl-2 lg:pr-4 lg:py-4 transition-all duration-300 ease-in-out"
        :class="{ 
            'max-h-[350px] lg:h-[250px] overflow-hidden': !expanded
        }"
    >
        <div
            class="flex items-start gap-4"
            :class="{ 'flex-col items-center text-center': expanded }"
        >
            <!-- 
                Image container
                Need to add cropping effect here in default display 
            -->
            <div v-if="!isMobile"
                class="overflow-hidden flex-shrink-0"
                :class="expanded 
                    // Expand
                    ? 'w-[clamp(300px,6vw,120px)] h-[clamp(240px,6vw,120px)] item-center'
                    // Contract
                    : 'w-[clamp(100px,2vw+50px,150px)] h-[clamp(80px,2vw+50px,120px)]'"
            >
                    <img :src="'/images/' + researchItem.image" 
                        class="w-full h-full object-cover"
                    />
            </div>

            <!-- 
                Container for Title and Description 
            -->
            <div class="flex-1">
                <!-- Research Title -->
                <h2 v-katex class="
                    noto-h2 font-[450] text-shadow-sm
                    text-[clamp(1rem,1vw+0.35rem,1.25rem)]
                    md:text-[clamp(1.75rem,2vw+0.8rem,3.5rem)]
                    lg:text-[clamp(0.825rem,2vw+0.3rem,1.15rem)]
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
                            noto-h3 font-[350] lg:font-[400]
                            text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                            md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                            lg:text-[clamp(0.825rem,1vw+0.3rem,1.25rem)]
                            text-shadow-md px-1 mb-2 text-left"
                    >
                        <p v-katex class="inline">
                            {{ paragraph }}
                            <!-- Only show button on last paragraph -->
                            <button v-if="idx === researchItem.description.length - 1"
                                    @click="toggleExpand"
                                    class="ml-2 text-blue-600 hover:underline">
                                less
                            </button>
                        </p>
                    </div>
                </div>
                <!-- Contracted View -->
                <div v-else class="relative">
                    <p v-katex class="
                        noto-h3 font-[350] lg:font-[400]
                        text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                        md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                        lg:text-[clamp(0.825rem,1vw+0.3rem,1.25rem)]
                        text-shadow-md line-clamp-4 px-1 text-left
                    ">
                        {{ researchItem.description[0] }}
                    </p>

                    <div class="absolute bottom-0 right-0 bg-white pl-1">
                        <button
                            @click="toggleExpand"
                            class="
                                noto-h3 font-[350] text-blue-600 lg:font-[400]
                                text-[clamp(0.825rem,1vw+0.4rem,1rem)]
                                md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                                lg:text-[clamp(0.825rem,1vw+0.3rem,1.25rem)]
                                hover:underline
                            ">
                            more...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { smallDisplayCheck } from '@/composables/displayCheck.js';

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

const isMobile = smallDisplayCheck();

</script>

