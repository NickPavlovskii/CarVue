<template>
  <div id="app">
    <Header/>
    <div>

      <router-view></router-view>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer,
    Header
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wrapper {
  flex: 1;
  padding-bottom: 100px; /* Adjust as needed to prevent content from being hidden behind the footer */
}

</style>
