<template>
  <form class="card-template" @submit.prevent="buttonFunction">
    <ProgressBar :step="step" />
    <div class="card-wrapper">
      <slot></slot>
      <div class="buttons-wrapper">
        <button class="next-button" type="submit">{{ nextButtonText }}</button>
        <button class="back-button" v-if="needBackButton" @click="backFunction">
          Назад
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import ProgressBar from "@/components/serviceComponents/ProgressBar.vue";
export default {
  name: "CardTemplate",
  props: {
    step: String,
    buttonFunction: Function,
    needBackButton: Boolean,
    backFunction: Function,
    nextButtonText: {
      type: String,
      default: "Далее"
    }
  },
  components: {
    ProgressBar
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.card-template {
  max-width: 850px;
  width: 100%;
  min-height: 590px;
  background-color: $main-heading-color;
  box-shadow: 0px 17px 40px 0px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  box-sizing: border-box;

  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 110px;
    @media (max-width: 768.8px) {
      padding: 50px 20px;
    }
    .buttons-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      padding-top: 32px;
      @media (max-width: 768.8px) {
        justify-content: center;
      }
      .next-button,
      .back-button {
        max-width: 190px;
        width: 100%;
        height: 50px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @media (max-width: 768.8px) {
          max-width: initial;
        }
      }
      .next-button {
        background-color: $main-dark;
        color: $main-heading-color;
      }
      .back-button {
        background-color: $main-heading-color;
        color: $main-dark;
        border: 1px solid $main-dark;
        margin-right: 30px;
        position: relative;
        @media (max-width: 375px) {
          max-width: 86px;
          &:before {
            content: "";
            position: absolute;
            background-color: $main-heading-color;
            z-index: 1;
            width: 70px;
            height: 42px;
          }
          &:after {
            content: "";
            position: absolute;
            background-image: url("../../assets/images/arrow-back.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 19px;
            margin-bottom: 1px;
            left: 30px;
            z-index: 2;
          }
        }
      }
    }
  }
}
</style>
