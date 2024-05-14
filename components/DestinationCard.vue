<template>
  <NuxtLink :to="destination._path" class="group relative block bg-black">
    <img
      alt=""
      :src="destination.image"
      class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div class="relative h-[24rem]">
      <div class="absolute p-4 top-0 sm:p-6 lg:p-8">
        <p
          class="text-sm font-medium uppercase tracking-widest text-[#F4E95B] font-island"
        >
          Destination
        </p>

        <p class="text-xl font-bold text-white sm:text-2xl">{{ destination.title }}</p>

        <div class="absolute -bottom-40">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-sm text-white">
              {{ destination.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  destination: {
    type: Object,
    required: true,
  },
});
</script>
