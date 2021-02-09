<template>
  <div class="input-component">
    <label for="input" class="input-label">
      {{ title }}
      <span v-if="mandatory" class="mandatory-mark">*</span>
    </label>
    <input
      :class="['input', errorMessage ? 'with-error' : '']"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput($event.target.value)"
      v-if="validateOn === 'input'"
    />
    <input
      :class="['input', errorMessage ? 'with-error' : '']"
      :placeholder="placeholder"
      :value="modelValue"
      @change="onInput($event.target.value)"
      v-if="validateOn === 'change'"
    />
    <span class="error-message" v-if="errorMessage">{{ errorMessage }}</span>
    <div class="error-icon" v-if="errorMessage"></div>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    title: String,
    mandatory: Boolean,
    placeholder: String,
    errorMessage: String,
    modelValue: String,
    validateOn: {
      type: String,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.input-component {
  display: flex;
  flex-direction: column;
  padding: 6px 6px 28px 0px;
  max-width: 630px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }

  .input-label {
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 6px;

    .mandatory-mark {
      color: $mark-red;
    }
  }

  .input {
    max-width: 630px;
    width: 100%;
    height: 50px;
    border: 1px solid $main-grey;
    border-radius: 10px;
    padding: 0 20px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    box-sizing: border-box;
    &::placeholder {
      color: $main-grey;
      font-weight: bold;
    }

    &:focus {
      border-color: $template-color;
    }

    &.with-error {
      padding-right: 40px;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .error-message {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
    color: $mark-red;
    margin-top: 4px;
    position: absolute;
    bottom: 9px;
  }

  .error-icon {
    background-image: url("../../assets/images/alert-icon.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 40px;
    right: 16px;
  }
}
</style>
