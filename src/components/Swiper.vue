<template>
  <div class="swiper-container swiper-background">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-slide"
        :style="{ backgroundImage: 'url(' + slide + ')' }"
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: {},
      slides: ['./Carsbg.jpg', './Slide2.jpg', './CarsBG.png'],
      currentSlideIndex: 0,
    };
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },

  
  mounted() {
    this.startAutoSwitch();
  },
  methods: {
    startAutoSwitch() {
      setInterval(this.switchSlide, 15000);
    },
    switchSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    },
  },

};
</script>

<style scoped>
.mySwiper {
  background: rgba(21, 21, 21, 0.6);
}
.swiper-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
