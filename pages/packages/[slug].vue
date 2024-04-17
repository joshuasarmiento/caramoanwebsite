<template>
  <main class="min-h-screen text-black">
    <ContentDoc v-slot="{ doc }" tag="pckage" >
      <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>