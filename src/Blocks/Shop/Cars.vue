<template>
  <div class="wrapper">
    <div class="container">
      <div style="margin-top: 250px">
        <h2 class="title">Choose your car</h2>
        <a-tabs default-active-key="1" class="tabs">
          <a-tab-pane key="1" tab="Car and Minivan">
            <div class="tabs__content-item">
              <a-card v-for="car in carsCarMinivan" :key="car.id" class="card">
                <img :src="car.image" alt="" class="card__img" />
                <h4 class="card__title">{{ car.title }}</h4>
                <p class="card__text">{{ car.price }}</p>
                <p class="card__price">{{ car.monthlyPrice }}</p>
                <a type="primary" href="#" class="card__link"> See details </a>
              </a-card>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Trucks">
            <div class="tabs__content-item">
              <a-card v-for="car in carsTrucks" :key="car.id" class="card">
                <img :src="car.image" alt="" class="card__img" />
                <h4 class="card__title">{{ car.title }}</h4>
                <p class="card__text">{{ car.price }}</p>
                <p class="card__price">{{ car.monthlyPrice }}</p>
                <a type="primary" href="#" class="card__link"> See details </a>
              </a-card>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="Crossovers & SUVs">
            <p>Pока что машин нет</p>
          </a-tab-pane>
          <a-tab-pane key="4" tab="Electrified">
            <p>Pока что машин нет</p>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carsCarMinivan: [
        {
          id: 1,
          title: "Toyota Crown 2023",
          description: "Starting from $ 39900",
          image: "./cars/cars1.png",
          price: "Starting from $ 39900",
          monthlyPrice: "$ 650/mo",
        },
        {
          id: 2,
          title: "Prius Prime 2023",
          description: "starting from $ 39900",
          image: "./cars/Cars2.png",
          price: "starting from $ 39900",
          monthlyPrice: "$ 650/mo",
        },
        {
          id: 3,
          title: "Toyota Prius 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars3.png",
          price: "starting from $ 39900",
          monthlyPrice: " $ 400/mo",
        },
        {
          id: 4,
          title: "Hyundai Kona 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars4.png",
          price: "starting from $ 39900",
          monthlyPrice: "$510/mo",
        },
        {
          id: 5,
          title: "Ford Explorer 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars5.png",
          price: "Starting from $ 39900",
          monthlyPrice: "$1,013/mo",
        },
        {
          id: 6,
          title: "Santa  Fe 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars6.png",
          price: "Starting from $ 39900",
          monthlyPrice: "$739/mo",
        },
        {
          id: 7,
          title: "KIA Niro 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars7.png",
          price: "starting from $ 33600",
          monthlyPrice: "$554/mo",
        },
        {
          id: 8,
          title: "Chevrolet Silverado",
          description: "Starting from $ 39900",
          image: "./cars/Cars8.png",
          price: "starting from $ 62260",
          monthlyPrice: "$1,032/mo",
        },
        {
          id: 9,
          title: "Honda CR-V 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars9.png",
          price: "starting from $ 62260",
          monthlyPrice: "$591/mo",
        },
        {
          id: 10,
          title: "Hyundai Tucson",
          description: "Starting from $ 39900",
          image: "./cars/Cars10.png",
          price: "starting from $ 62260",
          monthlyPrice: "$528/mo",
        },
        {
          id: 11,
          title: "Chevrolet Equinox",
          description: "Starting from $ 39900",
          image: "./cars/Cars11.png",
          price: "starting from $ 62260",
          monthlyPrice: "$471/mo",
        },
        {
          id: 12,
          title: "Jeep Wrangler 2023",
          description: "Starting from $ 39900",
          image: "./cars/Cars12.png",
          price: "starting from $ 62260",
          monthlyPrice: "$997/mo",
        },
        // Добавьте данные для других карточек
      ],

      carsTrucks: [
        {
          id: 1,
          title: "Ford F-150",
          description: "Starting from $ 35965",
          image: "./cars/Cars13.jpg",
          price: "Starting from $ 35965",
          monthlyPrice: "$711/mo",
        },
        {
          id: 2,
          title: "Chevrolet Silverado",
          description: "Starting from $ 62260",
          image: "./cars/Cars14.jpg",
          price: "Starting from $ 62260",
          monthlyPrice: "$1,032/mo",
        },
        {
          id: 3,
          title: "Toyota Tundra",
          description: "Starting from $ 39350",
          image: "./cars/Cars15.jpg",
          price: "Starting from $ 39350",
          monthlyPrice: "$781/mo",
        },
        {
          id: 4,
          title: "Ram 1500",
          description: "Starting from $ 32595",
          image: "./cars/Cars16.jpg",
          price: "Starting from $ 32595",
          monthlyPrice: "$647/mo",
        },
        // Добавьте другие данные для грузовиков
      ],
    };
  },
};
</script>
<style scoped>
.card__link {
  display: flex;
  justify-content: center;
  color: #0066ff;
  border: 1px solid #0066ff;
  font-weight: 700;
}

.card__price {
  display: flex;
  justify-content: center;
  font-family: Inter;
  margin: 20px 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.card__img {
  width: 270px;
  height: 170px;
}
.contacts {
  padding: 100px 0 159px;
}
.title {
  color: var(--Black, #151515);
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs__content-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 карточки в ряд */
  gap: 16px; /* Расстояние между карточками */
}
</style>
