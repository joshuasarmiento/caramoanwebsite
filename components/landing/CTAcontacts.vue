<template>
  <section class="overflow-hidden bg-[#A2A569]/20 my-16 sm:grid sm:grid-cols-2">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center">
      <div class=" mx-auto max-w-xl text-start">
        <h2 class="text-2xl font-bold text-[#A2A569] md:text-3xl">
          Start Planning Your Caramoan Getaway Today!
        </h2>

        <p class="mt-3">
          Ready to turn your dream vacation into a reality? Our friendly and knowledgeable team is 
          here to assist you every step of the way. Contact us today to customize your perfect 
          Caramoan itinerary, book accommodations, and secure transportation. Your paradise adventure awaits!
        </p>

        <div class="mt-4 md:mt-8">
          <ButtonBase :text="'Contact Us Now'" :link="'/contact'"  />
        </div>
      </div>
    </div>

    <img
      alt=""
      src="https://www.gamintraveler.com/wp-content/uploads/2019/11/Caramoan-0352-1.jpg"
      class="h-56 w-full object-cover sm:h-full"
    />
  </section>
</template>
