<template>
    <footer class="text-center text-gray-500 text-xs text-shadow-md space-y-1">
        <p>© {{ year }} Dario Fiore Mosca. All rights reserved.</p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>