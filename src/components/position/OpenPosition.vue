<template>
  <div class="
          min-h-screen lg:h-screen w-full items-stretch
          max-w-[1440px] mx-auto
          pt-6 pl-8 pr-6
          md:pt-10 md:pl-12 md:pr-8
          lg:pt-15 lg:pl-32 lg:pr-16
  ">
    <HomeLink class="pt-1 inline-block -ml-1"/>

    <!-- Page title -->
    <h1 class="
          noto-h1 font-[650] [letter-spacing:0.05rem]
          text-xl md:text-4xl lg:text-5xl
          text-shadow-sm mt-1
    ">
      <!-- Fallback title in case JSON isn't loaded yet -->
      {{ (data && data.title) ? data.title : 'Open Position' }}
    </h1>

    <!-- Loading / error / content -->
    <div class="pt-6">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else-if="data">
        <!-- Centered content container -->
        <div class="flex flex-col items-center">
          <!-- Centered image -->
          <img
            v-if="data.heroImage"
            :src="data.heroImage"
            :alt="data.heroAlt || data.title || 'Open position'"
            class="w-full max-w-md object-cover rounded-2xl shadow-md mb-8"
          />

          <!-- Plain text content -->
          <div class="w-full max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed space-y-6">
            <!-- Intro paragraph -->
            <p v-if="data.intro">
              {{ data.intro }}
            </p>

            <!-- Sections (Responsibilities, Profile, Offer, etc.) -->
            <section
              v-for="section in data.sections"
              :key="section.heading"
              class="space-y-2"
            >
              <h2
                v-if="section.heading"
                class="noto-h2 font-[600] text-lg md:text-2xl lg:text-3xl text-shadow-sm"
              >
                {{ section.heading }}
              </h2>

              <!-- Paragraph body (array of paragraphs) -->
              <div v-if="section.body && section.body.length" class="space-y-2">
                <p v-for="(paragraph, idx) in section.body" :key="idx">
                  {{ paragraph }}
                </p>
              </div>

              <!-- Optional bullet list -->
              <ul
                v-if="section.items && section.items.length"
                class="list-disc list-inside space-y-1"
              >
                <li v-for="(item, idx) in section.items" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </section>

            <!-- Contact block -->
            <section v-if="data.contact" class="space-y-2">
              <h2 class="noto-h2 font-[600] text-lg md:text-2xl lg:text-3xl text-shadow-sm">
                Contact
              </h2>
              <p v-if="data.contact.text">
                {{ data.contact.text }}
              </p>
              <p v-if="data.contact.email">
                Please send your application to:
                <span class="font-semibold">{{ data.contact.email }}</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <Copyright/>
    </div>
  </div>
</template>

<script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import HomeLink from '@/components/publication/HomeLink.vue';
import Copyright from '@/components/right-layout/Copyright.vue';

// Load positions.json from public/content
const { data, loading, error } = useJsonFetch('/content/positions.json');
</script>
