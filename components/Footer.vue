<template>
    <footer>
      <div class="flex items-center justify-center">
        <p>&copy; {{ currentYear }} Caramoan Website. All rights reserved.</p>
      </div>
    </footer>
</template>

<script setup>
 const currentYear = ref(0);

 currentYear.value = new Date().getFullYear();
</script>