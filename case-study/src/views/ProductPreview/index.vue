<template>
    <div class="flex flex-row mt-24">
    <h1 class="highlight-title font-semibold text-4xl relative inline-block">
        Product Preview
    </h1>
</div>
<div class="mt-12">

    <h2 class="font-semibold text-2xl relative inline-block">
          <span class="bg-yellow-400 px-2 py-1">Final Interactive demo  </span>
        </h2>
</div>
<div class="flex flex-row mt-8 justify-center">
    <p class="w-1/2 pr-16 leading-relaxed text-gray-500 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, animi eligendi natus ut neque facere veritatis quod quisquam voluptates laboriosam eius, beatae rerum inventore quos possimus a harum delectus explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis dolore ducimus harum porro. Alias reiciendis quo assumenda repudiandae molestiae reprehenderit itaque dolorem rem, dolorum sit hic excepturi saepe corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto fuga rerum quae vero earum, dolores eaque ducimus itaque, omnis veniam ratione, placeat dolorum. Cumque rerum quaerat asperiores vero officiis!</p>
    <img
      src="@/assets/images/productPreview.png"
      alt="Image 1"
      class="w-1/2 h-[500px] rounded-3xl"
    />

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
  }</style>