<template>
  <div class="flex flex-col space-y-4">
    <router-link to="/publications">
      <div
        class="
          relative flex items-center
          group mt-2 lg:mt-0
        "
      >
        <h3
          class="
            lg:text-[clamp(0.825rem,1vw+0.5rem,1.2rem)] text-sm
            noto-links text-shadow-sm lg:text-left
            inline-block
            transition-all duration-200 text-shadow-hover
          "
        >
          PUBLICATIONS
        </h3>

        <Icon
          :name="'diagonal-arrow'"
          class="out-arrow-dim arrow-shadow-effect hover-shadow ml-1"
        />
      </div>
    </router-link>

    <router-link to="/open-position">
      <div
        class="
          relative flex items-center
          group mt-2 lg:mt-0
        "
      >
        <h3
          class="
            lg:text-[clamp(0.825rem,1vw+0.5rem,1.2rem)] text-sm
            noto-links text-shadow-sm lg:text-left
            inline-block
            transition-all duration-200 text-shadow-hover
          "
        >
          OPEN POSITION
        </h3>

        <Icon
          :name="'diagonal-arrow'"
          class="out-arrow-dim arrow-shadow-effect hover-shadow ml-1"
        />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import Icon from '@/components/general/Icon.vue';
</script>
