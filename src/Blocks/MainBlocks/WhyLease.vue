<template>
  <div class="why-lease">
    <div class="container">
      <h2 class="section-title">Why Lease with D&M</h2>
      <ul class="why-lease__list">
        <li class="why-leas-item">
          <img src="../../assets/why-lease-3.svg" alt="" />
          <h3 class="why-leas-item-title">Top Dealers</h3>
          <p class="why-leas-item-text">
            TrueCar Certified Dealers compete for your business by providing
            discounted pricing on in-stock inventory.
          </p>
        </li>
        <li class="why-leas-item">
          <img src="../../assets/why-lease-2.svg" alt="" />
          <h3 class="why-leas-item-title">Discounted Pricing</h3>
          <p class="why-leas-item-text">
            View local inventory from the comfort of home and get access to
            guaranteed savings on the car of your choice.
          </p>
        </li>
        <li class="why-leas-item">
          <img src="../../assets/why-lease-1.svg" alt="" />
          <h3 class="why-leas-item-title">Lower Payments</h3>
          <p class="why-leas-item-text">
            Get discounted pricing when you shop for a car or truck using
            TrueCar and save on your lease payment.
          </p>
        </li>
        <li class="why-leas-item">
          <img src="../../assets/why-lease-5.svg" alt="" />
          <h3 class="why-leas-item-title">Easy Upgrade</h3>
          <p class="why-leas-item-text">
            Easy to upgrade to the newest vehicle model every few years if you
            would like to be modern and comfortable
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.why-leas-item img {
  margin-bottom: 30px;

}

.section-title {
  color: var(--Black, #151515);
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
}
.why-lease {
  margin: 150px 0;
}
.why-lease__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.why-leas-item-title {
    margin: 30px 0;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.why-leas-item-text {
  text-align: left;
}
</style>
