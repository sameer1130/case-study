<template>
    <div class="flex flex-col mt-24 rounded-3xl bg-cyan-50">
      <div class="flex p-4">
        <p class="leading-relaxed text-gray-500 text-xl p-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate atque 
          molestias rerum corporis expedita numquam distinctio, ullam sint iure quo? 
          Quas aperiam minus numquam deleniti repellat voluptatum voluptate nostrum.
          numquam distinctio, ullam sint iure quo? 
          Quas aperiam minus numquam deleniti repellat voluptatum voluptate nostrum.
          numquam distinctio, ullam sint iure quo? 
          Quas aperiam minus numquam deleniti repellat voluptatum voluptate nostrum.
        </p>
      </div>
  
      <div class="flex p-16 -mt-20">
        <div class="bg-white p-6 rounded-xl shadow-md w-full relative">
          <!-- Header with Toggle Button -->
          <div class="flex justify-between items-center">
            <h2 class="font-bold text-xl">Challenges & Solution</h2>
            <button @click="showDetails = !showDetails"
                    class="text-cyan-600 text-xl font-bold focus:outline-none">
              {{ showDetails ? '˄' : '˅' }}
            </button>
          </div>
  
          <!-- Collapsible Content -->
          <transition name="fade">
            <div v-if="showDetails" class="mt-4 space-y-4">
              <p class="leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, accusamus animi quibusdam commodi delectus deleniti, mollitia facilis quis rem officia est. Voluptas provident nisi rerum iure tempore rem accusamus nam magni eaque, officiis illo molestias aliquam adipisci ab cumque perferendis voluptatibus odit maiores dignissimos laudantium repellendus quam.
              </p>
              <h3 class="font-semibold pb-4 pt-2">Below are the key features:</h3>
              <p class="leading-relaxed text-md text-gray-500"> 
                <span class="font-semibold text-gray-600">1. Comprehensive Metrics:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <p class="leading-relaxed text-md text-gray-500"> 
                <span class="font-semibold text-gray-600">2. Comprehensive Metrics:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <p class="leading-relaxed text-md text-gray-500"> 
                <span class="font-semibold text-gray-600">3. Comprehensive Metrics:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <p class="leading-relaxed text-md text-gray-500"> 
                <span class="font-semibold text-gray-600">4. Comprehensive Metrics:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <p class="leading-relaxed text-md text-gray-500"> 
                <span class="font-semibold text-gray-600">5. Comprehensive Metrics:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const showDetails = ref(true)
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  