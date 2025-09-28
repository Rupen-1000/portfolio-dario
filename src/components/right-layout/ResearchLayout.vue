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
            <ResearchDescription
                :researchItem="researchItem"
                :expanded="expanded"
                @toggle-expand="toggleExpand"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ResearchImage from "@/components/right-layout/ResearchImage.vue";
import ResearchDescription from "@/components/right-layout/ResearchDescription.vue";

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

