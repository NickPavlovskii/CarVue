<template class="main">
  <div class="top">
    <div class="container">
      <h1 class="title">Leasing From D&M</h1>
      <router-link to="/shop" class="top__link">FIND A CAR</router-link>
    </div>
  </div>
  <Swiper/>
</template>

<script>
// Import Swiper Vue.js components
import Swiper from "../../components/Swiper.vue";

export default {
  components: {
    Swiper,
  },
};
</script>

<style scoped>
.main{
    flex-grow: 1;
}
.top {
  color: white;
  text-align: center;
  padding-top: 205px;
  padding-bottom: 50px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5
}

.title {
  padding-bottom: 40px;
  font-size: 96px;
  font-weight: 700;
}

.top__link {
  font-size: 36px;
  display: inline-block;
  font-weight: 700;

  width: 430px;
  padding: 23px;
  justify-content: center;
  align-items: center;

  background: #000;
}
.top__link:hover{
background: #06F;
}
</style>
