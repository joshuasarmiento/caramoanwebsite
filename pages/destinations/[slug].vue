<template>
  <ContentDoc v-slot="{ doc }" tag="destination">
    <section>
      <div
         class="h-[250px] bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${doc.image})` }"
      ></div>
    </section>
    <Container>
      <article class="prose max-w-full mt-12">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </Container>
  </ContentDoc>
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
