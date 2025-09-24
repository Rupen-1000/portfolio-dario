<template>
    <div class="
        rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)]
        p-2 lg:p-4 transition-all duration-300 ease-in-out"
        :class="{ 
            'max-h-[250px] lg:h-[250px] overflow-hidden': !expanded
        }"
    >
        <!-- Cross button in expanded view -->
        <button
            v-if="expanded"
            @click="toggleExpand"
            class="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
            x
        </button>
        <div
            class="flex items-start gap-4"
            :class="{ 'flex-col items-center text-center': expanded }"
        >
            <!-- 
                Image container
                Need to add cropping effect here in default display 
            
            -->
            <div 
                class="overflow-hidden flex-shrink-0"
                :class="expanded 
                    ? 'w-[clamp(60px,6vw,120px)] h-[clamp(60px,6vw,120px)]' 
                    : 'w-[clamp(50px,2vw,65px)] h-[clamp(50px,2vw,65px)]'"
            >
                    <img :src="'/images/' + researchItem.image" 
                        class="w-full h-full object cover p-1"
                    />
            </div>

            <!-- 
                Container for Title and Description 
            -->
            <div class="flex-1">
                <!-- Research Title -->
                <h2 class="
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
                <div v-if="expanded">
                    <div
                        v-for="(paragraph, idx) in researchItem.description"
                        :key="idx"
                        class="
                            noto-h3 font-[350] lg:font-[400]
                            text-[clamp(0.625rem,1vw+0.25rem,0.825rem)]
                            md:text-[clamp(0.825rem,2vw+0.3rem,2rem)]
                            lg:text-[clamp(0.825rem,1vw+0.3rem,1.25rem)]
                            text-shadow-md px-1 mb-2
                            text-left
                        ">
                        <p>{{ paragraph }}</p>
                    </div>
                </div>
                <div v-else>
                    <p
                        class="
                            noto-h3 font-[350] text-[clamp(0.825rem,1vw+0.5rem,1rem)] 
                            text-shadow-md line-clamp-2 px-1"
                    >
                        {{ researchItem.description[0] }}
                    </p>

                    <button
                        @click="toggleExpand"
                        class="text-sm text-blue-600 hover:underline mt-1 px-1"
                    >
                        more...
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
// Props declaration using defineProps()
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


<!-- 
    What do I need to show here?
        - Title.
        - Image
        - Description

    How?
        - Image on the left side
        - Title and cut of description.
        - Fixed size container:
            - height fixed
            - width almost as big as the content width
    
    Interactive aspect:
        - OnClick of "more..."" expand the container.
        - Show a cross on the top-right side to collapse.


This is a container I have to show content in it's full form. it's got an image, title and description. Since, this is the expanded view and now I want a collapsed, default view, where the height of the container is of a certain size. In this collapsed view, the image is on the left side minimized and the title and description on the right. The entire description is hidden with a "more..." clickable, which allows to get into the expanded view. I'd also like to add a cross at the top right corner of the container to get back to the default view. And it needs to be compatible with both mobile and desktop.
-->

