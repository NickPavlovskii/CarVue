<template>
  <div class="blog">
    <div class="container">
      <div class="blog__items">
        <div class="blog__item">
          <img class="blod__item-img" src="../assets/blog1.png" alt="" />
          <div style="display: flex">
            <h4 class="blod__item-title">
              An easier way to buy your next Toyota
            </h4>
            <a href="" class="blod__item-link">more</a>
          </div>
        </div>
        <div class="blog__item">
          <img class="blod__item-img" src="../assets/blog2.png" alt="" />
          <div style="display: flex">
            <h4 class="blod__item-title">A Guide to Road-Tripping With Pets</h4>
            <a href="" class="blod__item-link">more</a>
          </div>
        </div>
      </div>
      <a href="" class="blog__link">SHOW MORE</a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.blog {
  padding: 100px 0 159px;
}

.blog__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px; */
}
.blod__item-img {
  margin-bottom: 30px;
  width: 100%;
}
.blod__item-title {
  flex-basis: 480px;
}

.blod__item-link {
  color: white;
  background-color: #0066ff;
  display: flex;
  width: 80px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.blog__link {
  text-transform: uppercase;
  color: white;
  background: #151515;
  padding: 13px;
  margin: 40px auto;
  width: 226px;
  text-align: center;
  display: block;
}
</style>
