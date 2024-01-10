<template>
  <div class="important">
    <div class="container">
      <h2 class="important__title">Important Things to Consider</h2>
      <p class="important__text">
        Depending on your circumstances and what is important to you, a lease
        could be a great option for your next vehicle. Below are some important
        factors that may influence your decision.
      </p>
      <ul class="important__list">
        <li class="important__item">
          <img class="important__img" src="../../assets/img1.png" alt="" />
          <p class="important__item-text">
            Monthly payments on leases are generally 20% - 30% cheaper than
            loans
          </p>
        </li>
        <li class="important__item">
          <img class="important__img" src="../../assets/img2.png" alt="" />
          <p class="important__item-text">
            You may be eligible for a tax break if you use the leased vehicle
            for business purposes
          </p>
        </li>
        <li class="important__item">
          <img class="important__img" src="../../assets/img3.png" alt="" />
          <p class="important__item-text">
            Easy to upgrade to the newest vehicle model every few years
          </p>
        </li>
        <li class="important__item">
          <img class="important__img" src="../../assets/img4.png" alt="" />
          <p class="important__item-text">
            There are often fees charged if you drive more than your lease's
            mileage allowance
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.important {
  padding-bottom: 150px;
}

.important__title {
  text-align: center;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.important__text {
  max-width: 580px;
  margin: 0 auto 59px;
  /* Text 16 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.important__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.important__item-text{
    width: 270px;
color: var(--Black, #151515);
margin-top: 20px;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%; 
}

</style>
