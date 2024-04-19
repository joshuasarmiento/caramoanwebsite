<template>
  <Container>
    <div id="featured-destination"  class="flex py-16 gap-6">
      <div class="w-[40%] flex flex-col items-start justify-center">
        <h2
          class="flex flex-col gap-2 justify-center items-start font-semibold text-gray-600 mb-6"
        >
          <span class="text-4xl font-light">Enchanting</span>
          <span class="-mt-6 font-island text-[5rem] text-[#A2A569]">Islands</span>
        </h2>
        <p class="text-black tracking-wide -mt-6 mb-4">
          Explore the untouched beauty of this remote 
          archipelago and immerse yourself in the tranquility of nature.
        </p>
        <ButtonOutline :text="'View More'" link="/destinations" />
      </div>

      <div class="w-[60%] relative featured-destination">
        <div class="overflow-hidden" data-glide-el="track">
          <ul
            class="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap"
          >
            <li v-for="(destination, id) in destinations" :key="id">
              <DestinationCard :destination="destination" />
            </li>
          </ul>
        </div>
        <!-- Controls -->
        <div class="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
            <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full text-[#3D441E] border-[#3D441E] hover:border-white focus-visible:outline-none bg-[#3D441E]/20 hover:bg-white" data-glide-dir="<" aria-label="prev slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <title>prev slide</title>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
            <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full text-[#3D441E] border-[#3D441E] hover:border-white focus-visible:outline-none bg-[#3D441E]/20 hover:bg-white" data-glide-dir=">" aria-label="next slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <title>next slide</title>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

const { data: destinations } = await useAsyncData("destinations-home", () =>
  queryContent("/destinations")
    .sort({ published: -1 })
    .limit(data => data.length)
    .only(["title", "description", "image", "slug", "_path"])
    .find()
);

onMounted(() => {
  new Glide(".featured-destination", {
    type: "carousel",
    focusAt: 1,
    autoplay: 3500,
    perView: 2,
    gap: 12,
    classes: {
      activeNav: "[&>*]:bg-slate-700",
    },
    breakpoints: {
      1024: {
        perView: 2,
        gap: 0,
      },
      640: {
        perView: 1,
        gap: 0,
      },
    },
  }).mount();
});
</script>
