<script setup>
import NavBar from '@/components/NavBar.vue';
import Role from '@/views/Role/index.vue';
</script>

<template>
  <div class="flex min-h-screen ml-8 mr-12">
    <!-- Left side: NavBar -->
    <div class="w-[300px] bg-white justify-center">
      <NavBar />
    </div>

    <!-- Right side: Role content -->
    <div class="flex-1 p-6 z-10 ml-32 mr-12">
      <Role />
      <Problem />
      <Experience />
      <UserResearch />
      <Persona />
      <SolutionOverview />
      <JourneyMap />
      <ExternalResources />
      <VisualFramework />
      <StyleGuide />
      <Prototype />
      <UserTesting />
      <ProductPreview />
      <VideoWalkthrough />
      <Growth />
      <UserFeedback />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Role from '@/views/Role/index.vue';
import Problem from '@/views/Problem/index.vue';
import Experience from '@/views/Experience/index.vue';
import UserResearch from '@/views/UserResearch/index.vue';
import Persona from '@/views/Persona/index.vue';
import SolutionOverview from '@/views/SolutionOverview/index.vue';
import JourneyMap from '@/views/UserJourneyMap/index.vue';
import ExternalResources from '@/views/ExternalResources/index.vue';
import VisualFramework from '@/views/VisualFramework/index.vue';
import StyleGuide from '@/views/StyleGuide/index.vue';
import Prototype from '@/views/Prototype/index.vue';
import UserTesting from '@/views/UserTesting/index.vue';
import ProductPreview from '@/views/ProductPreview/index.vue';
import VideoWalkthrough from '@/views/VideoWalkthrough/index.vue';
import Growth from '@/views/Growth/index.vue';
import UserFeedback from '@/views/UserFeedback/index.vue';

</script>


