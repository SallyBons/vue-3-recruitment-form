<template>
  <div class="modal-template">
    <div class="modal-wrapper">
      <h2 class="modal-title">Вы точно хотите удалить {{ title }} ?</h2>
      <div class="modal-buttons-wrapper">
        <button class="button cancel" @click="cancelHandler" type="button">
          Нет
        </button>
        <button class="button submit" @click="submitHandler" type="button">
          Да
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalComponent",
  props: {
    title: String,
    submitHandler: Function,
    cancelHandler: Function
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
.modal-template {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(90, 163, 218, 0.8);
    backdrop-filter: blur(3px);
  }

  .modal-wrapper {
    position: fixed;
    top: 500px;
    background-color: $main-heading-color;
    min-height: 214px;
    max-width: 290px;
    width: 100%;
    border-radius: 10px;
    padding: 46px 50px 48px 47px;
    box-sizing: border-box;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
    @media (max-width: 375px) {
      top: 350px;
    }

    .modal-title {
      font-family: "Montserrat", sans-serif;
      color: $text-dark;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    }

    .modal-buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-top: 36px;
      max-width: 190px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .button {
        height: 36px;
        max-width: 80px;
        width: 100%;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        &.cancel {
          color: $main-dark;
          background-color: $main-heading-color;
          border: 1px solid $main-dark;
        }
        &.submit {
          color: $main-heading-color;
          border: 1px solid $main-dark;
          background-color: $main-dark;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
