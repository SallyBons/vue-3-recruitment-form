<template>
  <div class="mobile-tel-component">
    <label for="input-wrapper" class="input-label">
      {{ title }}
    </label>
    <div class="input-wrapper">
      <div
        class="vue-select-wrapper"
        :class="[Object.keys(code).length !== 0 ? 'active' : '']"
      >
        <vue-select
          :options="countryArray"
          :close-on-select="true"
          placeholder="Код"
          label-by="code"
          :modelValue="code"
          @selected="handleCodeSelected"
          @removed="handleCodeRemoved"
        >
          <template v-slot:dropdown-item="{ option }">
            <div class="flag-and-code-wrapper">
              <div :class="`flag-icon flag-icon-${option.name}`"></div>
              <span class="code">{{ option.code }} </span>
            </div>
          </template>
        </vue-select>
      </div>
      <div class="input-with-errors-wrapper">
        <input class="number-input" placeholder="Номер" v-model.lazy="number" />
        <span class="error-message" v-if="errorMessages.number">{{
          errorMessages.number
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-next-select";
import { numeric, minLength } from "@vuelidate/validators";
import { getErrorMessage } from "../../utils/getErrorMessage.js";

export default {
  name: "MobileTelephoneComponent",
  props: {
    title: String
  },
  emits: ["validationChange"],
  data() {
    return {
      countryArray: [
        { name: "ru", code: "+7" },
        { name: "by", code: "+375" },
        { name: "ua", code: "+380" }
      ]
    };
  },
  methods: {
    handleCodeSelected(value) {
      this.code = value;
    },
    handleCodeRemoved() {
      this.code = {};
    }
  },
  computed: {
    number: {
      get() {
        return this.$store.getters.getNumber;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "number",
          value: value
        });
      }
    },
    code: {
      get() {
        return this.$store.getters.getCode;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "code",
          value: value
        });
      }
    },
    errorMessages: function() {
      return {
        number: getErrorMessage(this.$v.number.$errors)
      };
    }
  },
  watch: {
    number: {
      handler() {
        this.$v.$touch();
        this.$emit("validationChange", this.$v.$invalid);
      },
      deep: true
    }
  },
  components: {
    VueSelect
  },

  validations() {
    return {
      number: {
        numeric,
        minLength: minLength(9),
        $autoDirty: true
      }
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styledDropdown.scss";
</style>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.mobile-tel-component {
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
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-with-errors-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      max-width: 410px;
      width: 100%;
    }
    .number-input {
      max-width: 410px;
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
      @media (max-width: 375px) {
        max-width: 160px;
      }
      &::placeholder {
        color: $main-grey;
        font-weight: bold;
      }

      &:focus {
        border-color: $template-color;
      }
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
    bottom: -20px;
  }
}
.flag-and-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 130px;
  width: 100%;
  .flag-icon {
    background-size: 100%;
    background-repeat: no-repeat;
    width: 30px;
    height: 20px;

    &.flag-icon-ru {
      background-image: url("../../assets/images/ru-flag.svg");
    }
    &.flag-icon-by {
      background-image: url("../../assets/images/by-flag.svg");
    }
    &.flag-icon-ua {
      background-image: url("../../assets/images/ua-flag.svg");
    }
  }
}
</style>
