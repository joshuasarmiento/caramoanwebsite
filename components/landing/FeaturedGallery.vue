<template>
  <section class="w-full py-16 bg-gray-50">
    <Container>
      <div class="flex items-start">
        <div class="w-1/2">
          <h2
            class="flex flex-col gap-2 justify-center items-start font-semibold text-gray-600 mb-6"
          >
            <span class="text-4xl font-light">Tailor Made </span>
            <span class="-mt-6 font-island text-[5rem] text-[#FF9906]">Journeys</span>
          </h2>
        </div>
        <div class="w-1/2">
          <p class="font-light tracking-wide text-black leading-[1.66] text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem sed
            veritatis facilis eligendi eaque cum alias nobis magnam esse nulla hic
            corrupti consectetur vitae, perferendis quibusdam amet! Vel, sit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Nobis eveniet labore asperiores
            distinctio nostrum officiis repudiandae excepturi aliquid quas dicta!
            Inventore dolorum rem enim doloremque. Minus, itaque! Mollitia, minus ea.
          </p>
        </div>
      </div>
    </Container>
    <div class="pt-8 overflow-hidden">
        <div class="relative w-full featured-gallery">
            <div data-glide-el="track">
            <ul class="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden gap-0">
                <li v-for="(item, index) in items" :key="index" class="h-[282px] w-[423px]">
                  <img :src="item" class="bg-cover w-full h-full" />
                </li>
            </ul>
            </div>
        </div>
    </div>
  </section>
</template>
<script setup>
import Glide from '@glidejs/glide';
import { onMounted } from 'vue';

const items = [
  'https://www.gamintraveler.com/wp-content/uploads/2019/11/Caramoan-0414.jpg',
  'https://c1.staticflickr.com/1/692/32535021415_4c2cc5d0df_o.jpg',
  'https://i.pinimg.com/originals/e6/eb/6b/e6eb6b461a0667930078a4f799e39cb9.jpg',
  'https://www.goodinfonet.com/uploads/news/goodinfonet_caramoan_group_of_islands_1601996768_0.jpg',
  'https://assets.rappler.com/382972DA66344B5DBE96E16D51CE1D9E/img/9808710C9B4744FCAA895FBD72651132/caramoan-3.jpg'
]

onMounted(() => {
  new Glide('.featured-gallery', {
    type: 'carousel',
    autoplay: 1,
    animationDuration: 8500,
    animationTimingFunc: 'linear',
    perView: 3,
    gap: 0,
    classes: {
      activeNav: '[&>*]:bg-slate-700',
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
})
</script>
