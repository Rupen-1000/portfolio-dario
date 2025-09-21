<!-- For the layout of the landing page of publication page -->
<template>
    <div class="article-box">
        <h3> {{ article.title }}</h3>
        <h4> {{ article.authors }}</h4>
        <h4> {{ article.journal }} </h4>
    </div>
</template>


<script setup>
// Props declaration using defineProps()
defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>