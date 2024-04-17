<template>
    <Container>
        <div class="flex flex-col py-16 gap-6 w-full">
            <div class="w-[80%] flex flex-col mx-auto items-center justify-center text-center">
                <h2 class="flex gap-2 justify-center items-center text-center font-semibold text-gray-600 mb-6">
                    <span class="text-[4rem] font-light">Our</span>
                    <span class="font-island text-[4rem] text-[#FF9906]">Packages</span>
                </h2>
                <p class="text-black tracking-wide -mt-3 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis quaerat nemo sed dolorem rerum officia aliquid. Dignissimos repellendus doloremque aut consectetur fugit et quos animi, quia, error hic quaerat.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, aliquid et voluptate rem animi facilis qui enim, ipsa corporis libero sint sunt saepe provident delectus repellat suscipit, exercitationem a placeat.
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