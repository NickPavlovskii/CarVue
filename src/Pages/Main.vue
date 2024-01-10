<template>
  <div>
    <Top />
    <!-- <HitProducts/> -->
    <WhyLease />
    <Howdoes />
    <Video />
    <Important />
  </div>
</template>

<script>

import Top from "../Blocks/MainBlocks/Top.vue";
import WhyLease from "../Blocks/MainBlocks/WhyLease.vue";
import Howdoes from "../Blocks/MainBlocks/Howdoes.vue";
import Important from "../Blocks/MainBlocks/Important.vue";
import Video from "../components/Video.vue";
// import HitProducts from "../components/HitProducts.vue";

export default {
  components: {
    Top,
    WhyLease,
    Howdoes,
    // HitProducts,
    Video,
    Important
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
