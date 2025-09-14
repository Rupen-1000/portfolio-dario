 <!-- For rendering social icons that are also clickable  -->

 <template>
   <div v-if="loading">Loading...</div>
   <div v-else-if="error">Error: {{ error }}</div>
   <div v-else>
      <div
      v-for="(values, socialName) in data"
      :key="socialName"
      class="
         border border-gray-200 
         p-4 grid items-center space-x-4
      "
      >
         <div class="text-xs">
            <!-- Here comes a link with the icon, it's clickable,and on hover for 5 secs shows social name  -->
              <a :href="values.link" target="_blank" rel="noopener noreferrer">
    
                  <img 
                     :src="values.icon-dir" 
                     :alt="`Icon for ${key}`"
                     class="w-6 h-6"
                  >
                  
               </a> 
         </div>
         <div></div>
      </div>
    </div>
 </template>

 <script setup>
import { useJsonFetch } from '@/composables/useJsonFetch.js';

// Load file using the composable
const { data, loading, error } = useJsonFetch('/content/socials.json');
</script>