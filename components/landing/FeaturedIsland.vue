<template>
  <Container>
    <div class="flex py-16 gap-6">
      <div class="w-[40%] flex flex-col items-start justify-center">
        <h2
          class="flex flex-col gap-2 justify-center items-start font-semibold text-gray-600 mb-6"
        >
          <span class="text-2xl font-light">Must Visit</span>
          <span class="-mt-3 font-island text-[2rem] text-[#FF9906]">Beaches</span>
        </h2>
        <p class="text-black tracking-wide -mt-3 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <ButtonOutline :text="'View More'" link="/islands" />
      </div>

      <div class="w-[60%] relative featured-island">
        <div class="overflow-hidden" data-glide-el="track">
          <ul
            class="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap"
          >
            <li v-for="(island, id) in islands" :key="id">
              <IslandCard :island="island" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

const { data: islands } = await useAsyncData("islands-home", () =>
  queryContent("/islands")
    .sort({ published: -1 })
    .limit(data => data.length)
    .only(["title", "description", "image", "slug", "_path"])
    .find()
);

onMounted(() => {
  new Glide(".featured-island", {
    type: "carousel",
    focusAt: 1,
    animationDuration: 4000,
    autoplay: 4500,
    autoplay: true,
    rewind: true,
    perView: 2,
    gap: 24,
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
