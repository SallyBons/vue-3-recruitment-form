<template>
  <div class="add-button-wrapper">
    <div class="add-button-content" @click="addNewHandler">
      <span class="add-icon"></span>
      <span class="add-text">Добавить {{ addText }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddButtonComponent",
  props: {
    addText: String,
    addNewHandler: Function
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.add-button-wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  @media (max-width: 375px) {
    align-items: center;
    justify-content: center;
  }
  .add-button-content {
    display: flex;
    cursor: pointer;
    .add-icon {
      background-image: url("../../assets/images/plus-icon.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
    }
    .add-text {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      color: $template-color;
      display: flex;
      align-items: center;
    }
  }
}
</style>
