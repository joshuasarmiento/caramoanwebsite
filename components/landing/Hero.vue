<template>
    <div class="">
        <div class="relative w-full overflow-hidden h-screen">
            <iframe
                class="absolute -translate-x-2/4 -translate-y-2/4 w-[2000px] h-[1130px] pointer-events-none left-2/4 top-2/4"
                src="https://www.youtube.com/embed/zUbgSjkyaC4?si=14OflOCsGYRASrRn&amp;controls=0&autoplay=1&mute=1&loop=1&modestbranding=1&autohide=1&showinfo=0&rel=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div class=" absolute w-full z-10">
                <Container>
                    <div class="flex flex-col justify-center h-screen mx-auto">
                        <div class="flex flex-col gap-0">
                            <h1 class="z-10 -mb-12 text-white text-[3.5rem] font-normal uppercase">Discover</h1> 
                            <h1 class="font-island text-[8rem] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9906] to-[#F4E95B]">CARAMOAN</h1>
                            <h1 class="z-10 -mt-12 text-white text-[3.5rem] font-normal uppercase">Paradise</h1>
                        </div>  
                        <div class="w-1/2 text-sm text-white">
                            <p>Escape to a tropical paradise where pristine beaches, crystal-clear waters, and breathtaking landscapes await.</p>    
                        </div>       
                    </div>
                </Container>
            </div>

            <div
                class="absolute justify-center inset-y-0 left-0 bg-[linear-gradient(50deg,_rgba(0,_0,_0,_0.62)_2.58%,_rgba(0,_0,_0,_0.31)_45.27%,_rgba(0,_0,_0,_0.00)_72.55%)] w-full">
            </div>
        </div>
    </div>
</template>