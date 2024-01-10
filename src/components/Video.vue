<template>
  <div class="video">
    <div class="container">
      <h2 class="video_title">WELCOME TO D&M LEASING</h2>
      <p class="video__text">Find out how easy it is to lease from D&M</p>
      <iframe
        class="video_cont"
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/-qXQ-20K0rs?si=EqpipbcBFaZSySd-"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.video {
  padding-bottom: 150px;
}
.video_title {
  text-align: center;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.video__text {
  margin-bottom: 50px;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.video_cont {
  margin: 0 auto;
  display: block;
}
</style>
