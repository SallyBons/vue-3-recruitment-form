<template>
  <div class="birthday-component">
    <label for="input-wrapper" class="input-label">
      {{ title }}
    </label>
    <div class="input-wrapper">
      <div class="input-with-errors-wrapper">
        <input
          class="day-input"
          placeholder="День"
          v-model.lazy="date.day"
          type="number"
        />
        <span class="error-message" v-if="errorMessages.day">{{
          errorMessages.day
        }}</span>
      </div>

      <div
        class="vue-select-wrapper"
        :class="[date.month !== '' ? 'active' : '']"
      >
        <vue-select
          :options="monthArray"
          placeholder="Месяц"
          :close-on-select="true"
          :modelValue="date.month"
          @selected="handleMonthSelected"
          @removed="handleMonthRemoved"
        ></vue-select>
        <span class="error-message" v-if="errorMessages.month">{{
          errorMessages.month
        }}</span>
      </div>
      <div class="input-with-errors-wrapper">
        <input
          class="year-input"
          placeholder="Год"
          v-model.lazy="date.year"
          type="number"
        />
        <span class="error-message" v-if="errorMessages.year">{{
          errorMessages.year
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-next-select";
import { between, minValue, requiredUnless } from "@vuelidate/validators";
import { getErrorMessage } from "../../utils/getErrorMessage.js";

export default {
  name: "BirthDayComponent",
  props: {
    title: String
  },
  emits: ["validationChange"],
  data() {
    return {
      monthArray: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ]
    };
  },
  methods: {
    handleMonthSelected(value) {
      this.date.month = value;
    },
    handleMonthRemoved() {
      this.date.month = "";
    }
  },
  computed: {
    date: {
      get() {
        return this.$store.getters.getBirthDayDate;
      },
      set() {
        this.$store.dispatch("setSecondStepField", {
          field: "birthDayDate",
          value: {
            day: this.day,
            month: this.month,
            year: this.year
          }
        });
      }
    },
    errorMessages: function() {
      return {
        day: getErrorMessage(this.$v.date.day.$errors),
        month: getErrorMessage(this.$v.date.month.$errors),
        year: getErrorMessage(this.$v.date.year.$errors)
      };
    }
  },
  watch: {
    date: {
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
      date: {
        day: {
          between: between(1, 31),
          $autoDirty: true
        },
        month: {
          required: requiredUnless(
            this.date.day === "" || this.date.year === ""
          ),
          $autoDirty: true
        },
        year: {
          minValue: minValue(1900),
          $autoDirty: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
</style>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.birthday-component {
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
    }
    .day-input,
    .year-input {
      max-width: 190px;
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
      -moz-appearance: textfield;
      @media (min-width: 320px) and (max-width: 375px) {
        padding: 0 15px;
      }
      &::placeholder {
        color: $main-grey;
        font-weight: bold;
      }

      &:focus {
        border-color: $template-color;
      }
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
</style>
