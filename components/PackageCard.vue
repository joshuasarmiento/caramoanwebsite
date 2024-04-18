<template>
  <NuxtLink :to="pckage._path" class="group relative block bg-black">
    <img
      :src="pckage.image"
      class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div class="relative p-4 sm:p-6 lg:p-8">
      <p class="text-sm font-medium uppercase tracking-widest text-[#F4E95B] font-island">
        Package
      </p>

      <p class="text-xl font-bold text-white sm:text-2xl">{{ pckage.title }}</p>

      <div class="mt-16">
        <div
          class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <div class="flex flex-col gap-0.5 my-6 text-white">
            <div class="flex gap-2">
              <p class="text-pretty text-xs">
                {{ pckage.pOne }}
              </p>
              <p class="text-pretty text-xs">{{ pckage.pOnep }}</p>
            </div>
            <div class="flex gap-2">
              <p class="text-pretty text-xs">
                {{ pckage.pTwo }}
              </p>
              <p class="text-pretty text-xs">{{ pckage.pTwop }}</p>
            </div>
          </div>
          <a
            href="#"
            class="duration-[1000ms] group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F4E95B]"
          >
            Find out more
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
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
