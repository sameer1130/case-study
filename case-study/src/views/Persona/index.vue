
<template>
<div class="mt-24">
    <h2 class="font-semibold text-2xl relative inline-block">
       <span class="bg-yellow-400 px-2 py-1">
        User Personas
       </span> 
    </h2>

    
</div>

  <div class="relative w-full flex justify-center items-center mt-12">
    <!-- Display the selected image or card -->
    <img
      :src="images[currentIndex]"
      alt="User Persona"
      class="rounded shadow-lg w-[900px] h-[700px]"
    />

    <!-- Circle buttons on the right -->
    <div class="absolute right-10 top-1/4 transform -translate-y-3/4 space-y-4">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="currentIndex = index"
        :class="[
          'w-10 h-10 rounded-full flex items-center justify-center  font-bold shadow-md',
          currentIndex === index ? 'bg-black text-white' : 'bg-white text-black border'
        ]"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  new URL('@/assets/images/kerala-1.jpg', import.meta.url).href,
  new URL('@/assets/images/rajasthan-1.jpg', import.meta.url).href,
  new URL('@/assets/images/kerala-1.jpg', import.meta.url).href
]

const currentIndex = ref(0)
</script>

<!-- <a-carousel>
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" class=" " />
    </div>
  </a-carousel>
   -->


  
  
<!-- <script setup>
const images = [
  new URL('@/assets/images/kerala-1.jpg', import.meta.url).href,
  new URL('@/assets/images/rajasthan-1.jpg', import.meta.url).href,
  new URL('@/assets/images/kerala-1.jpg', import.meta.url).href
];
</script>

<style scoped>
/* Optional: customize arrows or dot position */
.ant-carousel .slick-slide {
  text-align: center;
}
</style> -->
  