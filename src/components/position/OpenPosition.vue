<template>
  <div
    class="
      min-h-screen lg:h-screen w-full items-stretch
      max-w-[1440px] mx-auto
      pt-6 pl-8 pr-6
      md:pt-10 md:pl-12 md:pr-8
      lg:pt-15 lg:pl-32 lg:pr-16
    "
  >
    <HomeLink class="pt-1 inline-block -ml-1" />

    <!-- Page title -->
    <h1
      class="
        noto-h1 font-[650] [letter-spacing:0.05rem]
        text-xl md:text-4xl lg:text-5xl
        text-shadow-sm mt-1
      "
    >
      {{ data?.title ?? 'Open Position' }}
    </h1>

    <div class="pt-6">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else-if="data">
        <div class="flex flex-col items-center">
          <!-- Image -->
          <img
            v-if="data.heroImage"
            :src="data.heroImage"
            :alt="data.heroAlt || data.title || 'Open position'"
            class="w-full max-w-md object-cover rounded-2xl shadow-md mb-8"
          />

          <!-- Text content -->
          <div
            class="
              w-full max-w-3xl
              text-sm md:text-base lg:text-lg
              leading-relaxed space-y-8
            "
          >
            <!-- Intro -->
            <p v-if="data.intro">
              {{ data.intro }}
            </p>

            <!-- Sections -->
            <section
              v-for="section in data.sections"
              :key="section.heading"
              class="space-y-2"
            >
              <h2
                v-if="section.heading"
                class="
                  noto-h2 font-[600]
                  text-lg md:text-2xl lg:text-3xl
                  text-shadow-sm
                "
              >
                {{ section.heading }}
              </h2>

              <div
                v-if="Array.isArray(section.body) && section.body.length"
                class="space-y-2"
              >
                <p v-for="(paragraph, idx) in section.body" :key="idx">
                  {{ paragraph }}
                </p>
              </div>

              <ul
                v-if="Array.isArray(section.items) && section.items.length"
                class="list-disc list-inside space-y-1"
              >
                <li v-for="(item, idx) in section.items" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </section>

            <!-- Contact -->
            <section
              v-if="data.contact"
              class="space-y-2 border-t pt-6 mt-4"
            >
              <h2
                class="
                  noto-h2 font-[600]
                  text-lg md:text-2xl lg:text-3xl
                  text-shadow-sm
                "
              >
                Contact
              </h2>

              <p v-if="data.contact.text">
                {{ data.contact.text }}
              </p>

              <ul
                v-if="
                  Array.isArray(data.contact.items) &&
                  data.contact.items.length
                "
                class="list-disc list-inside space-y-1"
              >
                <li v-for="(item, idx) in data.contact.items" :key="idx">
                  {{ item }}
                </li>
              </ul>

              <p v-if="data.contact.email">
                Please send your application to
                <a
                  :href="`mailto:${data.contact.email}`"
                  class="font-semibold underline"
                >
                  {{ data.contact.email }}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <Copyright />
    </div>
  </div>
</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import HomeLink from '@/components/publication/HomeLink.vue';
import Copyright from '@/components/right-layout/Copyright.vue';

const { data, loading, error } = useJsonFetch('/content/positions.json');
</script>
