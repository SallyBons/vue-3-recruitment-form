<template>
  <div class="main-template">
    <div class="content-wrapper">
      <div class="heading-wrapper">
        <h1 class="main-heading">Анкета кандидата</h1>
      </div>
      <div class="congrats-wrapper">
        <div class="congrats-content-wrapper">
          <h2 class="congrats-title">Поздравляем!</h2>
          <p class="congrats-text">Ваша анкета отправлена</p>
          <button class="button submit" @click="submit">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnswersSaved",
  methods: {
    submit() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.main-template {
  background-color: $template-color;
  min-height: 100vh;
  padding: 0 15px;
  position: relative;
}

.content-wrapper {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}

.heading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 332px;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 42px;

  @media (max-width: 768.8px) {
    padding: 25px 0;
    justify-content: flex-start;
  }
}

.main-heading {
  color: $main-heading-color;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 20px;

  @media (max-width: 768.8px) {
    font-size: 25px;
  }
}

.congrats-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  .congrats-content-wrapper {
    min-height: 214px;
    max-width: 290px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 48px 54px;
    box-sizing: border-box;
    background-color: $main-heading-color;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: -38px;
      left: 110px;
      background-image: url("../assets/images/telegram-icon.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 80px;
      height: 80px;
    }

    .congrats-title {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      color: $text-dark;
      margin-top: 20px;
    }
    .congrats-text {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: $text-dark;
      text-align: center;
      margin-top: 10px;
    }

    button {
      max-width: 80px;
      width: 100%;
      height: 36px;
      border-radius: 10px;
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: $main-heading-color;
      border: 1px solid $main-dark;
      background-color: $main-dark;
      margin-top: 33px;
    }
  }
}
</style>
