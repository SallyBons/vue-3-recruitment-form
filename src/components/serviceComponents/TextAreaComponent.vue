<template>
  <div class="textarea-component">
    <label for="input" class="textarea-label">
      {{ title }}
    </label>
    <textarea
      class="textarea"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TextAreaComponent",
  props: {
    title: String,
    placeholder: String,
    modelValue: String
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

.textarea-component {
  display: flex;
  flex-direction: column;
  padding: 6px 6px 16px 0px;
  max-width: 630px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
  }

  .textarea-label {
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 6px;
  }

  .textarea {
    max-width: 630px;
    width: 100%;
    height: 150px;
    border: 1px solid $main-grey;
    border-radius: 10px;
    padding: 0 20px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    box-sizing: border-box;
    padding: 23px 25px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
    &::placeholder {
      color: $main-grey;
      font-weight: bold;
      margin-top: 25px;
    }

    &:focus {
      border-color: $template-color;
    }
  }
}
</style>
