<template>
  <!-- <NuxtLink :to="pckage._path" class="group relative block bg-black">
    <img
      alt=""
      :src="pckage.image"
      class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div class="relative p-4 sm:p-6 lg:p-8">
      <p class="text-sm font-medium uppercase tracking-widest text-[#F4E95B] font-island">
        Package
      </p>

      <p class="text-xl font-bold text-white sm:text-2xl">{{ pckage.title }}</p>

      <div class="mt-32 sm:mt-48 lg:mt-64">
        <div
          class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p class="text-sm text-white">
            {{ pckage.description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink> -->
  <NuxtLink :to="pckage._path" class="group relative block">
    <div class="relative h-[350px] sm:h-[450px]">
      <img
        :src="pckage.image"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-100 "
      />
    </div>

    <div class="absolute inset-0 flex flex-col items-center justify-end p-6 bg-black/45 group-hover:bg-black/60">
      <p class="text-sm font-medium uppercase tracking-widest text-[#F4E95B] font-island">
        Package
      </p>

      <h3 class="text-xl font-medium text-white">{{ pckage.title }}</h3>

      <div class="flex flex-col gap-0.5 my-6">
        <UBadge color="black" :ui="{ rounded: 'rounded-none' }" class="flex gap-2">
          <p class="text-pretty text-xs text-black">
              {{ pckage.pOne }}
          </p>
          <p class="text-pretty text-xs text-black">{{ pckage.pOnep }}</p>
        </UBadge>
        <UBadge color="black" :ui="{ rounded: 'rounded-none' }" class="flex gap-2">
          <p class="text-pretty text-xs text-black">
              {{ pckage.pTwo }}
          </p>
          <p class="text-pretty text-xs text-black">{{ pckage.pTwop }}</p>
        </UBadge>
      </div>

      <span
        class="mt-3 inline-block border border-white group-hover:border-none group-hover:bg-[#FF9906] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
      >
        View More
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  pckage: {
    type: Object,
    required: true,
  },
});
</script>
