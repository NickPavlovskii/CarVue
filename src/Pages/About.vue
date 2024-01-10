<template>
  <div class="wrapper">
      <Form/>
      <Blog/>
    
  </div>
</template>


<script>

import Form from "../components/Form.vue";
import Blog from "../components/Blog.vue";
export default {
  components: {
    Form,
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
