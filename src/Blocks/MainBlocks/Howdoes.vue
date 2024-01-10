<template>
  <div class="Howdoes">
    <div class="container">
      <div class="Howdoes-iner">
        <h2 class="Howdoes-title">How Does Leasing Work?</h2>
        <p class="Howdoes-text">
          Leasing a vehicle is essentially entering into a long term rental
          agreement for that vehicle. Unlike a traditional car purchase, you
          don’t actually own the vehicle. Instead, a leasing company purchases
          the vehicle from the dealer on your behalf and then you make monthly
          payments to the leasing company for the duration of your lease. Some
          leases however, do provide the option to purchase the vehicle at the
          end of the lease.
        </p>
        <h4 class="Howdoes-subtitile">
          Similar to a short term car rental, there are rules that define:
        </h4>
        <ol class="how-does-list">
          <li class="how-does-item">
            How much you can drive, stated as annual miles (excess miles are
            charged at a specified rate)
          </li>
          <li class="how-does-item">
            Types of damage that you may be liable for at the end of your lease
          </li>
          <li class="how-does-item">
            The procedures and costs when you return the vehicle at the end of
            your lease
          </li>
        </ol>
        <p class="Howdoes-text">
          Lease contracts are a commitment and ending them early can be
          difficult and expensive so it is important to consider your
          circumstances carefully before you decide.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Howdoes {
  padding-bottom: 150px;
}

.Howdoes-iner {
  max-width: 600px;
  margin: 0 auto;
}

.Howdoes-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: 50px;
}

.Howdoes-text {
  color: var(--Black, #151515);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.Howdoes-subtitile {
  padding-top: 50px;
  width: 540px;
  color: var(--Black, #151515);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.how-does-list {
  padding: 50px 0 70px;
  counter-reset: myConter;
}
.how-does-item {
  list-style-type: none;
  position: relative;
  margin-left: auto;
  box-sizing: content-box;
  padding: 19px 0 10px 24px;
  width: 225px;
  margin-top: 40px;
  line-height: 130%;
  min-height: 64px;
}
.how-does-item::before {
  counter-increment: myConter;
  content: counter(myConter);
  display: flex;
  position: absolute;
  left: -250px;
  top: 0;
  font-size: 48px;
  font-weight: 700;
  background-color: #0066ff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
