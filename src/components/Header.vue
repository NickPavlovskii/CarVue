<!-- Header.vue -->
<template>
  <header class="header header-main" :style="{ backgroundColor: isHomePage ? 'transparent' : '#151515' }"> 
    <div class="container headerkine">
      <div class="header__inner">
        <router-link to="/">
          <img src="../assets/logo.svg" alt="" class="logo__img" />
        </router-link>
        <nav class="menu">
          <ul class="menu__list"> 
            <li class="menu__list-item">
              <router-link to="/shop" class="menu__list-link"
                >NEW CARS</router-link
              >
            </li>
            <li class="menu__list-item">
              <router-link to="/pre-owned-cars" class="menu__list-link"
                >PRE-OWNED CARS</router-link
              >
            </li>
            <li class="menu__list-item">
              <router-link to="/finance" class="menu__list-link"
                >FINANCE</router-link
              >
            </li>
            <li class="menu__list-item">
              <router-link to="/lease-vs-buy" class="menu__list-link"
                >LEASE VS BUY</router-link
              >
            </li>
            <li class="menu__list-item">
              <router-link to="/contact-us" class="menu__list-link"
                >CONTACT US</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <br v-if="isHomePage" class="header-underline" />
  </header>
</template>

<script>



export default {
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style scoped>
/* Добавьте эти стили в ваш файл стилей (например, styles.css) или в тот же файл, где у вас уже есть стили для компонента */

.header {
  position: relative;
  font-family: Inter;
  background-color: #151515;
}
.header-underline {
  content: '';
  display: block;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background-color: #fff; /* Change the color as needed */
}
.header-main {
  /* background-color: transparent;  */
  position: absolute;
  z-index: 6;
  left: 0;
  right: 0;
}
.header__inner {
  padding: 40px 0 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.menu {
  display: flex;
  margin-left: 448px;
}

.menu__list {
  display: flex;
  gap: 35px;
}

.menu__list-link {
  color: white;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
