<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__main">
        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <p class="footer_menu-title">Products</p>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Used</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">New</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Sell your car</a>
          </li>
        </ul>
        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <p class="footer_menu-title">Resources</p>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Blog</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Contact us</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">FAQ</a>
          </li>
        </ul>
        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <p class="footer_menu-title">Work With TrueCar</p>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Dealers</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Partners</a>
          </li>
        </ul>
        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <p class="footer_menu-title">About</p>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">About us</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Team</a>
          </li>
          <li class="footer__menu-item">
            <a href="" class="footer_menu-link">Careers</a>
          </li>
        </ul>
      </nav>
      <ul class="app">
        <li class="app-item">
          <a href="" class="app-links">
            <img src="../assets/app-store.svg" alt="" />
          </a>
        </li>
        <li class="app-item">
          <a href="" class="app-links">
            <img src="../assets/google-play.svg" alt="" />
          </a>
        </li>
      </ul>
      <div class="footer__text">
        <p class="text">
          For questions about the TrueCar Auto Buying Service please call
          1-888-878-3227. Certified Dealers are contractually obligated by
          TrueCar to meet certain customer service requirements and complete the
          TrueCar Dealer Certification Program.
        </p>
        <p class="text">
          TrueCar does not broker, sell, or lease motor vehicles. Unless
          otherwise noted, all vehicles shown on this website are offered for
          sale by licensed motor vehicle dealers. All vehicles are subject to
          prior sale. By accessing this website, you agree to the TrueCar Terms
          of Service and Privacy Policy.
        </p>
      </div>
      <div class="copy_nav">
        <ul class="copy_nav-list">
          <li class="copy_nav-list">
            <a href="" class="copy_nav-items">Terms of Service</a>
          </li>
          <li class="copy_nav-list">
            <a href="" class="copy_nav-items">Privacy Policy</a>
          </li>
          <li class="copy_nav-list">
            <a href="" class="copy_nav-items"
              >Do Not Sell My Personal Information</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  font-family: Inter;
  background-color: #151515;
  padding: 40px 0 32px 72px;
  color: white;
  width: 100%;
  
}
/* .footer__main */
.footer__main {
  display: flex;
  justify-content: space-around;
  margin-bottom: 48px;
}

.footer_menu-title {
  font-size: 24px;
  padding-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 217px;
}

.footer__menu-item + .footer__menu-item {
  margin-top: 20px;
}

.app {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.app-item + .app-item {
  margin-left: 30px;
}

/* footer__text */

.footer__text {
  font-weight: 400;
  max-width: 860px;
  margin: 0 auto 30px;
  text-align: center;
}

/* copy_nav */

.copy_nav-list{
display: flex;
justify-content: center;
gap: 40px;
}
</style>
