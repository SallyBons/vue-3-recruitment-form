<template>
  <div class="custom-dropdown-component">
    <label for="vue-select-wrapper" class="dropdown-label">
      {{ title }}
    </label>

    <div class="input-wrapper">
      <div
        class="vue-select-wrapper"
        :class="[modelValue !== '' ? 'active' : '']"
      >
        <vue-select
          :options="options"
          :placeholder="placeholder"
          :modelValue="modelValue"
          :close-on-select="true"
          @selected="handleSelected"
          @removed="handleRemoved"
        ></vue-select>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-next-select";

export default {
  name: "CustomDropdownComponent",
  props: {
    title: String,
    options: Array,
    placeholder: String,
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],

  methods: {
    handleSelected(value) {
      this.$emit("update:modelValue", value);
    },
    handleRemoved() {
      this.$emit("update:modelValue", "");
    }
  },

  components: {
    VueSelect
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styledDropdown.scss";
</style>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.custom-dropdown-component {
  display: flex;
  flex-direction: column;
  padding: 6px 6px 20px 0px;
  box-sizing: border-box;
  max-width: 630px;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  .dropdown-label {
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 6px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
