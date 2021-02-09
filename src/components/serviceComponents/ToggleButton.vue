<template>
  <div class="toggle-wrapper">
    <label class="switch">
      <input type="checkbox" v-model="checkboxState" />
      <span class="slider round"></span>
    </label>
    <span class="toggle-text">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "ToggleButton",
  props: {
    text: String,
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  data() {
    return {
      checkboxState: false
    };
  },
  watch: {
    checkboxState: function() {
      this.$emit("update:modelValue", this.checkboxState);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.toggle-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;
  .switch {
    position: relative;
    display: inline-block;
    width: 43px;
    height: 23px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $main-grey;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      &:before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        left: 2px;
        bottom: 2px;
        background-color: $main-heading-color;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      &.round {
        border-radius: 24px;
        &:before {
          border-radius: 50%;
        }
      }
    }
    input:checked + .slider {
      background-color: $template-color;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px $template-color;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
  }
  .toggle-text {
    font-family: "Montserrat", sans-serif;
    color: $text-grey;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 11px;
  }
}
</style>
