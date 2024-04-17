<template>
  <section class="w-full bg-[#f3f3f3] pt-16">
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
    <div class="pt-8">
      <UCarousel 
        ref="carouselRef" 
        :items="items" 
        class="">
        <template #default="{ item }">
          <div>
            <img :src="item" width="300" height="400" draggable="false" />
          </div>
        </template>
      </UCarousel>
    </div>
  </section>
</template>
<script setup lang="ts">
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>
