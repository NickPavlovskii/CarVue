<template>
  <div class="contacts">
    <div class="container">
      <h2 class="contacts-title">Contact Us</h2>
      <p class="contacts-text">
        Feel free to contact us with questions, potencial partnerships or media
        inquiries
      </p>
      <form action="#" class="form">
        <input type="text" class="form__input" placeholder="Name" />
        <input type="email" class="form__input" placeholder="E-mail" />
        <textarea class="form__textarea" placeholder="Your text"></textarea>
        <button class="form__btn" type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.contacts {
  padding: 100px 0 159px;
}
.contacts-title {
  margin-top: 70px;
  color: var(--Black, #151515);
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.form{
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.contacts-text {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 90px;
  padding: 0 100px;
}

.form__input {
  width: 270px;
  padding: 18px 20px;
  display: inline-block;
  border: 1px solid #0066ff;
  margin-bottom: 50px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #151515;
}
.form__input ::placeholder{
    font-size: 16px;
    font-weight: 400;
    color: #151515;
    opacity: 0.9;
}
.form__textarea{
    border: 1px solid #0066ff;
    width: 100%;
    resize: none;
    padding: 29px 20px;
    height: 290px;
    color: #000;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 50px;
}

.form__btn{
    text-transform: uppercase;
    color: #fff;
    background-color: #151515;
    font-family: 'inter';
    font-size: 16px;
    font-weight: 400;
    padding: 13px 61px;
    margin: 0 auto;
}
.form__btn:hover{
    background-color: #0066ff;;
}
</style>
