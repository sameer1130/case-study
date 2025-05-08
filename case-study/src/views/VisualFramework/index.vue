<template>
    <div class="flex flex-row mt-24">
    <h1 class="highlight-title font-semibold text-4xl relative inline-block">
        Visual Framework
    </h1>
</div>
<div class="mt-12">

    <h2 class="font-semibold text-2xl relative inline-block">
          <span class="bg-yellow-400 px-2 py-1"> Low Fidelity Wireframe </span>
        </h2>
</div>
<div class="relative w-full flex justify-center items-center mt-12">
    <!-- Display the selected image or card -->
    <img
      :src="images[currentIndex]"
      alt="User Persona"
      class="rounded shadow-lg w-[900px] h-[500px]"
    />

    <!-- Circle buttons on the right -->
    <div class="absolute right-10 top-1/3 transform -translate-y-3/4 space-y-4">
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
<style>
  .highlight-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.1em;
    width: 100%;
    height: 50%;
    background-color: #20f19a; /* cyan-200 */
    z-index: -1;
  }</style>