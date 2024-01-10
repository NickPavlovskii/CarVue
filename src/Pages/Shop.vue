<template>
  <div class="wrapper">
    <Cars/>
    <Blog/>
   
    
  </div>
</template>


<script>
import Blog from "../components/Blog.vue";
import Cars from "../Blocks/Shop/Cars.vue";
export default {
  components: {
    Cars,
    Blog
  },
 
};
</script>

<style scoped>

.wrapper{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
