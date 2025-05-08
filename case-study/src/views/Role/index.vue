<template>
  <div class="flex flex-col pt-24">
    <h1 class="text-4xl font-bold text-left leading-loose">
      Lorem ipsum dolor sit amet consectetur adipisic elit. Laborum suscipit
      repel
    </h1>
  </div>
  <div class="flex flex-row pt-24 space-x-6">
    <!-- Image 1 -->
    <img
      src="@/assets/images/kerala-1.jpg"
      alt="Image 1"
      class="w-1/2 h-auto rounded-3xl"
    />

    <!-- Image 2 -->
    <img
      src="@/assets/images/rajasthan-1.jpg"
      alt="Image 2"
      class="w-1/2 h-auto rounded-3xl"
    />
  </div>
  <div class="flex flex-row pt-24 space-x-6">
    <div class="border-r-2 border-gray-200 pr-8">
      <h2 class="highlight-title font-semibold text-2xl relative inline-block">
        Role
      </h2>
      <p class="leading-relaxed text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias
        esse hic possimus quo deserunt facilis quam nam nobis perferendis eius
        ducimus blanditiis ipsa dolorem dolore, voluptatem voluptas cupiditate
        odit?
      </p>
    </div>
    <div class="pl-4">
      <h2 class="highlight-title font-semibold text-2xl relative inline-block">Team</h2>
      <p class="leading-relaxed text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias
        esse hic possimus quo deserunt facilis quam nam nobis perferendis eius
        ducimus blanditiis ipsa dolorem dolore, voluptatem voluptas cupiditate
        odit?
      </p>
    </div>
  </div>
</template>
<script></script>
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
}
</style>
