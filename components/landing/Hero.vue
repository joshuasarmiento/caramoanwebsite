<template>
    <div class="">
        <div class="relative w-full overflow-hidden h-screen">
            <!-- <iframe
                class="absolute -translate-x-2/4 -translate-y-2/4 w-[2000px] h-[1130px] pointer-events-none left-2/4 top-2/4"
                src="https://www.youtube.com/embed/zUbgSjkyaC4?si=14OflOCsGYRASrRn&amp;controls=0&autoplay=1&mute=1&loop=1&modestbranding=1&autohide=1&showinfo=0&rel=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

            <video width="100%" height="100%" class="absolute w-full h-full object-cover left-0 top-0" autoplay muted
                loop>
                <source src="/video/caramoan4k.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div class="absolute w-full z-10">
                <Container>
                    <div class="flex flex-col justify-center text-center sm:text-start h-screen mx-auto">
                        <div class="flex flex-col gap-0">
                            <h1
                                class="animate-text font-island bg-gradient-to-r from-[#3D441E] via-[#6D712E] to-[#737B4C] bg-clip-text text-transparent text-[3rem] sm:text-[6rem] font-black">
                                CARAMOAN
                            </h1>
                            <h1 class="z-10 sm:-mt-12 text-white text-[2rem] sm:text-[3.5rem] font-extralight">
                                Islands in the Philippines
                            </h1>
                        </div>
                        <div class="w-full mt-12 sm:mt-0 sm:w-1/2 text-white">
                            <p>
                                Explore the pristine white sand beaches, crystal-clear turquoise waters,
                                lush tropical landscapes, and vibrant marine life of Caramoan
                            </p>
                        </div>
                        <!-- <div class="absolute bottom-10 w-fit mx-auto mt-6">
                            <NuxtLink to="#featured-island" class="animate-bounce inline-block rounded-full border border-[#FF9906] p-3 text-[#FF9906] hover:text-[#F4E95B]">
                            <span class="sr-only"> Download </span>
                                <svg
                                    class="size-5 rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </NuxtLink>   
                        </div> -->
                    </div>
                </Container>
            </div>

            <div class="absolute justify-center inset-0 bg-black opacity-50 w-full"></div>
        </div>
    </div>
</template>
