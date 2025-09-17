 <!-- For rendering social icons that are also clickable  -->

 <template>
   <div v-if="loading">Loading...</div>
   <div v-else-if="error">Error: {{ error }}</div>
   <!-- Container for the socials -->
   <div v-else class="flex space-x-1/2">
      <div
         v-for="(values, socialName) in data"
         :key="socialName"
         class="relative inline-block group lg:p-2 "
      >
         <!-- email needs to be copied so use v-if else -->
         <!-- Also add error handling -->
         <!-- Here comes a link with the icon, it's clickable,and on hover for 5 secs shows social name  -->
         <a :href="values.link" 
            target="_blank" 
         >
            <Icon :name="socialName" class="social-icons"/>
            <!-- DEBUG: Below code creates problems!!! -->
            <!-- <span 
               class="
                  absolute top-1/2 left-full ml-2 
                  transform -translate-y-1/2
                  bg-gray-800 text-white text-xs 
                  py-1 px-2 rounded
                  opacity-0 transition-opacity duration-300
               ">
               {{ values.name }}
            </span> -->
         </a> 
      </div>
    </div>
 </template>

 <script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';
import Icon from '@/components/general/Icon.vue';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/socials.json');
</script>