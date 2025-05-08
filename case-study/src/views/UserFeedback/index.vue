<template>
  <div class="flex justify-between">
    <div class="  mt-24">
      <h1 class="highlight-title font-semibold text-4xl relative inline-block">
        User Feedback
      </h1>
    </div>
    <img
        src="@/assets/images/quotes.png"
        alt="Image 1"
        class="w-24 mt-32 h-24 rounded-3xl mr-12"
    />
</div>
    <div class="text-lg text-gray-500 leading-relaxed mt-8">
  
    <p>
      1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia earum
      quibusdam id quia quisquam natus, nesciunt omnis rem ratione voluptatem
      aspernatur voluptas, excepturi obcaecati reprehenderit corporis
      consectetur. Nesciunt, asperiores voluptates!
    </p>
    <p>
      2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia earum
      quibusdam id quia quisquam natus, nesciunt omnis rem ratione voluptatem
      aspernatur voluptas, excepturi obcaecati reprehenderit corporis
      consectetur. Nesciunt, asperiores voluptates!
    </p>
</div>
    <!-- <p>
    5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia earum quibusdam id quia quisquam natus, nesciunt omnis rem ratione voluptatem aspernatur voluptas, excepturi obcaecati reprehenderit corporis consectetur. Nesciunt, asperiores voluptates!
</p> -->
  
</template>
<script></script>
<style>
.highlight-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0.1em;
  width: 100%;
  height: 50%;
  background-color: #20f19a; /* cyan-200 */
  z-index: -1;
}
</style>
