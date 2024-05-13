<template>
  <section
    class="relative bg-[url(https://images.pexels.com/photos/1616037/pexels-photo-1616037.jpeg)] h-[400px] bg-cover bg-center bg-no-repeat"
  >
    <div class="bsolute inset-0 bg-black/80 opacity-50"></div>
    <div class="absolute inset-0">
      <Container>
        <div class="flex items-center mx-auto">
          <div class="absolute text-white top-2/4">
            <h2 class="text-[3rem] text-[#FF9906]">Destinations</h2>
          </div>
        </div>
      </Container>
    </div>
  </section>
  <Container>
    <div class="my-4 w-fit flex gap-2">
      <UInput
        v-model="q"
        name="q"
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass-20-solid"
        autocomplete="off"
        :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <template #trailing>
          <UButton
            v-show="q !== ''"
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false"
            @click="q = ''"
          />
        </template>
      </UInput>
      <USelect v-model="selectedTag" :options="uniqueTags" @change="filterByTag" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(destination, index) in paginatedDestinations" :key="index">
        <DestinationCard :destination="destination" />
      </div>
    </div>

    <div class="mt-4 flex items-center justify-center">
      <UPagination
        v-model="currentPage"
        :page-count="perPage"
        :total="filteredDestinations.length"
        :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
      >
        <template #prev="{ onClick }">
          <UTooltip text="Previous page">
            <UButton
              icon="i-heroicons-arrow-small-left-20-solid"
              color="primary"
              :ui="{ rounded: 'rounded-full' }"
              class="rtl:[&_span:first-child]:rotate-180 me-2"
              @click="onClick"
            />
          </UTooltip>
        </template>

        <template #next="{ onClick }">
          <UTooltip text="Next page">
            <UButton
              icon="i-heroicons-arrow-small-right-20-solid"
              color="primary"
              :ui="{ rounded: 'rounded-full' }"
              class="rtl:[&_span:last-child]:rotate-180 ms-2"
              @click="onClick"
            />
          </UTooltip>
        </template>
      </UPagination>
    </div>
  </Container>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

const perPage = 6;
const currentPage = ref(1);
const q = ref("");
const selectedTag = ref("All");

const { data: destinations } = await useAsyncData("destinations-home", () =>
  queryContent("/destinations")
    .sort({ published: -1 })
    .limit((data) => data.length)
    .only(["title", "description", "image", "slug", "_path", "tags"])
    .find()
);

const uniqueTags = computed(() => {
  const tags = new Set();
  destinations.value.forEach((destination) => {
    if (destination.tags && Array.isArray(destination.tags)) {
      destination.tags.forEach((tag) => tags.add(tag));
    }
  });
  return ["All", ...Array.from(tags)];
});

const filteredDestinations = computed(() => {
  if (q.value.trim() === "") {
    if (selectedTag.value === "All") {
      return destinations.value;
    } else {
      return destinations.value.filter((destination) => {
        return (
          destination.tags && destination.tags.includes(selectedTag.value)
        );
      });
    }
  } else {
    const searchQuery = q.value.toLowerCase();
    return destinations.value.filter((destination) => {
      const matchesSearch =
        destination.title.toLowerCase().includes(searchQuery) ||
        destination.description.toLowerCase().includes(searchQuery);
      const matchesTag =
        selectedTag.value === "All" ||
        (destination.tags && destination.tags.includes(selectedTag.value));
      return matchesSearch && matchesTag;
    });
  }
});

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return filteredDestinations.value.slice(start, end);
});
function filterByTag() {
  currentPage.value = 1;
}
</script>
