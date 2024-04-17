<template>
    <Container>
        <div class="flex py-16 gap-6">
            <div class="w-[40%] flex flex-col items-start justify-center">
                <h2 class="flex flex-col gap-2 justify-center items-start font-semibold text-gray-600 mb-6">
                    <span class="text-2xl font-light">Must Visit</span>
                    <span class="-mt-3 font-island text-[2rem] text-[#FF9906]">Beaches</span>
                </h2>
                <p class="text-black tracking-wide -mt-3 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <ButtonOutline :text="'View More'" link="/islands" />
            </div>
            <ul class="flex gap-4">
                <li v-for="(island, id) in islands" :key="id">
                    <IslandCard :island="island" />
                </li>
            </ul>
        </div>
    </Container>
</template>

<script lang="ts" setup>
const { data: islands } = await useAsyncData("islands-home", () =>
  queryContent("/islands")
    .sort({ published: -1 })
    .limit(3)
    .only(["title", "description", "image", "slug", "_path"])
    .find()
);
</script>