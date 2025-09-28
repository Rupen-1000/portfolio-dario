import { ref, onMounted } from 'vue';

export function useJsonFetch(url) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data.value = await response.json();
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  // Call the fetch when the component is mounted
  onMounted(fetchData);

  // Return the reactive variables and the fetch function
  return { data, loading, error, fetchData };
}