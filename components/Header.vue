<template>
  <header ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <div v-if="!isScrolled" class="bg-white mx-auto px-4 sm:px-6 lg:px-8 transition-all">
      <Container>
        <div class="bg-white w-full flex justify-between items-center py-[0.1rem]">
          <a href="#" class="flex gap-2 items-center">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-[#5CB7E4]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                /></svg
            ></span>
            <span class="text-sm text-black">+63 999999999</span>
          </a>
          <div class="flex gap-4 items-center justify-center">
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer text-black hover:text-[#5CB7E4]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer text-black hover:text-[#5CB7E4]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer text-black hover:text-[#5CB7E4]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                /></svg
            ></a>
          </div>
        </div>
      </Container>
    </div>
    <div
      :class="{
        'bg-white/10 backdrop-filter backdrop-blur-lg': !isScrolled,
        'bg-white': isScrolled,
      }"
      class="w-full sticky top-0 transition-all"
    >
      <Container>
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="#">
              <span class="sr-only">Home</span>
              <NuxtImg class="h-16 w-16" src="/logo/caramoanLogo.png" alt="Logo" />
            </a>
          </div>
          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li v-for="item in items" :key="item.path">
                  <ULink
                    :to="item.path"
                    :class="{
                      'text-gray-300': !isScrolled,
                      'text-gray-600': isScrolled,
                    }"
                    class="relative px-3 py-4 flex items-center justify-center transition hover:text-[#FF9906]"
                    active-class="text-[#FF9906]"
                  >
                    <span
                      v-if="$route.path === item.path"
                      class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#FF9906]/0 via-[#FF9906]/70 to-[#FF9906]/0"
                    ></span>
                    <span> {{ item.name }} </span>
                  </ULink>
                </li>
              </ul>
            </nav>
            <div class="block md:hidden">
              <span>
                <button :class="{ 'hidden': !isClosed, 'block': isClosed }" @click="isClosed = !isClosed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :class="{
                      'text-gray-200': !isScrolled,
                      'text-gray-600': isScrolled,
                    }"
                    class="h-6 w-6 cursor-pointer hover:text-[#FF9906]"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 2H6m5 5H3.5m5 5h-8"
                    />
                  </svg>
                </button>
                <button
                  @click="isClosed = !isClosed"
                  :class="{ 'hidden': isClosed, 'block': !isClosed }"
                  id="close-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :class="{ 'text-gray-200': !isScrolled, 'text-gray-600': isScrolled }"
                    class="h-6 w-6 cursor-pointer hover:text-[#FF9906]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div
        :class="[isClosed ? 'hidden' : 'block']"
        class="w-full sticky top-0 transition-all pt-12 pb-20 flex flex-col gap-12"
      >
        <li
          class="flex items-center justify-center mx-auto gap-6"
          v-for="item in items"
          :key="item.path"
        >
          <NuxtLink
            :to="item.path"
            :class="{ 'text-gray-200': !isScrolled, 'text-gray-600': isScrolled }"
            class="transition hover:text-[#FF9906]"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isClosed = ref(true);

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const items = [
  {
    name: "HOME",
    path: "/",
  },
  { name: "ABOUT", path: "/about" },
  { name: "TOURS", path: "/tours" },
  { name: "PACKAGES", path: "/packages" },
  { name: "DESTINATION", path: "/destination" },
  { name: "CONTACT US", path: "/contact" },
];
</script>
