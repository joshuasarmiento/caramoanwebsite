<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex justify-center text-teal-600">
        <NuxtImg class="h-20 w-20" src="/logo/caramoanLogo.png" alt="Footer Logo" />
      </div>

      <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
        itaque neque.
      </p>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li v-for="item in itemsFooter" :key="item.path">
          <NuxtLink :to="item.path" class="text-gray-700 transition hover:text-gray-700/75"> {{ item.name }} </NuxtLink>
        </li>    
      </ul>

      <div class="mt-12 text-gray-600 text-sm flex justify-center">
        <span><p>&copy; {{ currentYear }}. All rights reserved.</p></span>
      </div>
    </div>
  </footer>
  
</template>

<script setup>
 const currentYear = ref(0);

 currentYear.value = new Date().getFullYear();

 const itemsFooter = [
  { name: "About",
    path: "/about"
  },
  { name: "Tours",
    path: "/tours" 
  },
  { name: "Packages",
    path: "/packages"
  },
  { name: "Destination",
    path: "/destination" 
  },
  { name: "Contact Us",
    path: "/contact"
  },
]
</script>