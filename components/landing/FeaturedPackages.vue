<template>
    <Container>
        <div class="flex flex-col py-16 gap-6 w-full">
            <div class="w-[70%] flex flex-col mx-auto items-center justify-center text-center">
                <h2 class="flex gap-2 justify-center items-center text-center font-semibold text-gray-600 mb-6">
                    <span class="font-island text-[4rem] text-[#A2A569]">Caramoan Getaway</span>
                </h2>
                <p class="text-black text-center tracking-wide -mt-3 mb-4">
                    Whether you're seeking a romantic retreat, a family-friendly vacation, or an adrenaline-pumping adventure, 
                    our featured packages offer the perfect blend of comfort, excitement, and authentic local experiences.
                </p>
            </div>
            <ul class="grid grid-cols-3 gap-4">
                <li v-for="(pckage, id) in packages" :key="id">
                    <PackageCard :pckage="pckage" />
                </li>
            </ul>
        </div>
    </Container>
</template>

<script lang="ts" setup>
const { data: packages } = await useAsyncData("packages-home", () =>
  queryContent("/packages")
    .sort({ published: -1 })
    .limit(6)
    .only(["title", "description", "pOne", "pTwo", "pOnep", "pTwop", "image", "slug", "_path"])
    .find()
);
</script>