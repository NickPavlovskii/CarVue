<template>
    <div>
      <section class="category">
        <h2>Lifestyle</h2>
        <ul class="hit-list">
          <li class="hit-item">
            <img src="../assets/img1.png" alt="Product Image" class="product-image" />
            <a href="#">Бейсболка BMW GOLFSPORT</a>
            <span class="price">3 200 P</span>
          </li>
          <li>
            <img src="../assets/img1.png" alt="Product Image" class="product-image" />
            <a href="#">Бейсболка BMW CLASSIC M SPORT</a>
            <span class="price">4 300 P</span>
          </li>
          <li>
            <img src="../assets/img1.png" alt="Product Image" class="product-image" />
            <a href="#">Кошелек BMW М без отделения для мелочи</a>
            <span class="price">15 100 P</span>
          </li>
        </ul>
      </section>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .category {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }
  .hit-item{
    display: flex;
    flex-direction: column;
  }
  .category h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .category ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .hit-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .category li a {
    color: #000;
  }
  
  .category li span {
    color: #999;
  }
  </style>
