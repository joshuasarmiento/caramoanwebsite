<template>
  <div class="overflow-hidden ">
    <Container>
      <div class="relative w-full client-words">
        <div
          class="w-1/2 flex flex-col mx-auto items-center justify-center text-cente pb-12"
        >
          <h2
            class="flex gap-2 justify-center items-center text-center font-semibold text-gray-600 mb-6"
          >
            <span class="text-2xl font-bold text-[#A2A569] md:text-3xl">What Our Guests Say About Their Caramoan Experience</span>
          </h2>
          <!-- <p class="text-black text-center tracking-wide -mt-3 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, aliquid et
            voluptate rem animi facilis qui enim, ipsa corporis libero sint sunt saepe
            provident delectus repellat suscipit, exercitationem a placeat.
          </p> -->
        </div>
        <!-- Slides -->
        <div data-glide-el="track" class="">
          <ul
            class="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0 pb-12"
          >
            <li v-for="item in items" :key="item">
              <div class="w-full h-full">
                <!-- Start Testimonial -->
                <div class="h-full overflow-hidden bg-[#A2A569]/20 ">
                  <div class="relative p-6">
                    <figure class="relative z-10">
                      <blockquote class="p-6 leading-relaxed">
                        <p>
                          {{ item.text }}
                        </p>
                      </blockquote>
                      <figcaption
                        class="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#3D441E]"
                      >
                        <div class="flex items-center gap-4 pt-4 text-sm text-[#3D441E]">
                          <!-- <img
                          :src="item.image"
                          :alt="item.name"
                          :title="item.name"
                          width="48"
                          height="48"
                          class="max-w-full rounded-full shrink-0"
                        /> -->
                          <div class="flex flex-col gap-1">
                            <span class="font-bold uppercase">{{ item.name }}</span>
                            <cite class="not-italic">{{ item.location }}</cite>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                    <svg
                      aria-hidden="true"
                      class="absolute z-0 h-16 left-6 top-6"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                        class="fill-[#3D441E]/10"
                      />
                    </svg>
                  </div>
                </div>
                <!-- End Testimonial -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

const items = [
  {
    name: "Sarah",
    image: "https://i.pravatar.cc/40?img=1",
    text:
      "Caramoan was an absolute dream come true! The islands were even more breathtaking in person than I could have ever imagined. The locals were so friendly and welcoming, and our guide went above and beyond to ensure we had an unforgettable experience. I can't wait to come back and explore more of this paradise.",
    location: "Sydney, Australia",
  },
  {
    name: "Michael",
    image: "https://i.pravatar.cc/40?img=2",
    text:
      "I've traveled to many beautiful destinations, but Caramoan truly stands out. The untouched landscapes, crystal-clear waters, and serene atmosphere made it the perfect escape from the hustle and bustle of city life. The island hopping tour was the highlight of my trip – each island had its own unique charm and beauty.",
    location: "Singapore",
  },
  {
    name: "Lisa",
    image: "https://i.pravatar.cc/40?img=3",
    text:
      "Caramoan exceeded all my expectations! The accommodations were top-notch, and the staff went out of their way to make us feel at home. The guided hikes through the lush forests were a great way to connect with nature and learn about the local flora and fauna. I highly recommend Caramoan to anyone seeking a serene and rejuvenating getaway.",
    location: "Manila, Philippines",
  },
  {
    name: "David",
    image: "https://i.pravatar.cc/40?img=3",
    text:
      "As an avid snorkeler, I was blown away by the vibrant marine life in Caramoan. The coral reefs were teeming with colorful fish, and I even had the chance to swim with sea turtles! The Aquatic Adventure package was perfect for me, and I can't wait to come back and explore more of the underwater wonders.",
    location: "New York, USA",
  },
];

onMounted(() => {
  new Glide(".client-words", {
    type: "carousel",
    focusAt: "center",
    animationDuration: 7000,
    autoplay: 10500,
    autoplay: true,
    rewind: true,
    perView: 2,
    gap: 48,
    classes: {
      activeNav: "[&>*]:bg-slate-700",
    },
    breakpoints: {
      1024: {
        perView: 2,
      },
      640: {
        perView: 1,
      },
    },
  }).mount();
});
</script>
