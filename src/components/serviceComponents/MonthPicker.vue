<template>
  <div :class="['month-picker', isOpened ? 'active' : '']" :ref="guid">
    <label for="input" class="input-label">
      {{ title }}
      <span v-if="mandatory" class="mandatory-mark">*</span>
    </label>
    <div class="month-picker-input-wrapper">
      <input
        type="text"
        name=""
        id=""
        :value="modelValue"
        :placeholder="placeholder"
        class="selected-value"
      />
      <span class="calendar-icon"></span>
    </div>

    <div class="month-picker-content" v-show="isOpened">
      <div class="month-picker-year-selector">
        <div class="month-picker-year">
          {{ selectedYear }}
        </div>
        <div class="month-picker-controls">
          <span class="control" @click="decrementYear"> &lt; </span>
          <span class="control" @click="incrementYear"> &gt; </span>
        </div>
      </div>
      <div class="month-picker-avaliable-months">
        <div
          class="month-picker-month"
          v-for="item in months"
          :key="item.title"
          @click="selectMonth(item.value)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMonths } from "../../utils/getMonths";
import { generateUID } from "../../utils/generateUID";

export default {
  name: "MonthPicker",
  props: {
    title: {
      type: String,
      default: ""
    },
    mandatory: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: String
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpened: false,
      selectedMonth: "",
      selectedYear: this.getClientYear(),
      months: getMonths()
    };
  },
  computed: {
    guid: function() {
      return "MonthPicker-" + generateUID();
    },
    selectedValue: function() {
      return `${this.selectedMonth} ${this.selectedYear}`;
    }
  },
  watch: {
    selectedValue: function(value) {
      this.$emit("update:modelValue", value);
    }
  },
  methods: {
    selectMonth(value) {
      this.selectedMonth = value;
    },
    documentClick(e) {
      let el = this.$refs[this.guid];
      let target = e.target;

      if (el !== target && !el.contains(target)) {
        this.isOpened = false;
      } else if (
        target.className.includes("month-picker-month") &&
        el.contains(target)
      ) {
        this.isOpened = false;
      } else {
        this.isOpened = true;
      }
    },
    getClientYear() {
      return new Date().getFullYear();
    },
    getClientMonth() {
      // Returns index of current month from client
      return new Date().getMonth();
    },
    incrementYear() {
      this.selectedYear += 1;
    },
    decrementYear() {
      this.selectedYear -= 1;
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  unmounted() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.month-picker {
  max-width: 300px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &.active {
    border-color: $template-color;
  }

  .input-label {
    position: absolute;
    top: -22px;
    left: 0;
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 6px;
  }

  .month-picker-input-wrapper {
    display: flex;
    .calendar-icon {
      background-image: url("../../assets/images/calendar.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 19px;
      margin-bottom: 1px;
    }
    .selected-value {
      font-family: "Inter", sans-serif;
      color: transparent;
      text-shadow: 0 0 0 $text-dark;
      font-size: 14px;
      line-height: 17px;
      font-weight: 600;
      @media (min-width: 320px) and(max-width: 375px) {
        max-width: 170px;
      }
      cursor: pointer;
      &::placeholder {
        color: $main-grey;
        font-weight: bold;
        text-shadow: none;
      }

      &:focus {
        border-color: $template-color;
        outline: none;
      }
    }
  }

  .month-picker-content {
    position: absolute;
    bottom: -250px;
    max-width: 300px;
    width: 100%;
    border: 1px solid $template-color;
    border-radius: 10px;
    background-color: $main-heading-color;
    z-index: 9;
    .month-picker-year-selector {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 60px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      font-family: "Inter", sans-serif;
      color: $text-dark;
      border-bottom: 2px solid $main-grey;
      .month-picker-controls {
        .control {
          color: $template-color;
          font-weight: 800;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .month-picker-avaliable-months {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 200px;
      width: 100%;
      margin: 0 38px;
      padding: 5px 10px;
      .month-picker-month {
        height: 48px;
        max-width: 48px;
        width: 100%;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        &:hover {
          background-color: rgba(90, 163, 218, 0.2);
          color: $template-color;
          font-weight: 600;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
