<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :mainTitle="'Ожидания от работы'"
    :needBackButton="true"
    :backFunction="back"
  >
    <CustomDropdownComponent
      :title="'Позиция, на которую вы претендуете'"
      :placeholder="'Выберите позицию из списка'"
      v-model="position"
      :options="positionArray"
    />
    <ToggleButton :text="'Другая вакансия'" v-model="customPosition" />
    <InputComponent
      :mandatory="false"
      :placeholder="'Введите вакансию'"
      v-model="position"
      v-if="customPosition"
    />
    <div :class="['salary-section', customPosition ? 'custom-position' : '']">
      <CustomDropdownComponent
        :title="'Минимальная ЗП'"
        :placeholder="'Выберите ЗП'"
        v-model="minSalary"
        :options="salaryArray"
      />
      <span class="divider">-</span>

      <CustomDropdownComponent
        :title="'Оптимальная ЗП'"
        :placeholder="'Выберите ЗП'"
        v-model="optimalSalary"
        :options="salaryArray"
      />
    </div>
    <div class="work-start-section">
      <label for="input" class="section-label">
        Когда вы сможете приступить к работе</label
      >
      <div class="work-start-content">
        <MonthPicker :placeholder="'Выберите дату'" v-model="workStartDate" />
        <div class="asap-container">
          <input class="asap-checkbox" type="checkbox" v-model="asap" />
          <label for="input" class="label">Как можно скорее</label>
        </div>
      </div>
    </div>
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import CustomDropdownComponent from "@/components/serviceComponents/CustomDropdownComponent.vue";
import ToggleButton from "@/components/serviceComponents/ToggleButton.vue";
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import MonthPicker from "@/components/serviceComponents/MonthPicker.vue";

export default {
  name: "Expectations",
  data() {
    return {
      step: "Expectations",
      positionArray: [
        "Software Engineer",
        "Database Developer",
        "Bisiness Analyst"
      ],
      salaryArray: [
        "$250-$500",
        "$500-$1000",
        "$1000-$1500",
        "$1500-$2000",
        "$2000+"
      ],
      customPosition: false
    };
  },

  computed: {
    position: {
      get() {
        return this.$store.getters.getPosition;
      },
      set(value) {
        this.$store.dispatch("setThirdStepField", {
          field: "position",
          value: value
        });
      }
    },
    minSalary: {
      get() {
        return this.$store.getters.getMinSalary;
      },
      set(value) {
        this.$store.dispatch("setThirdStepField", {
          field: "minSalary",
          value: value
        });
      }
    },
    optimalSalary: {
      get() {
        return this.$store.getters.getOptimalSalary;
      },
      set(value) {
        this.$store.dispatch("setThirdStepField", {
          field: "optimalSalary",
          value: value
        });
      }
    },
    workStartDate: {
      get() {
        return this.$store.getters.getWorkStartDate;
      },
      set(value) {
        this.$store.dispatch("setThirdStepField", {
          field: "workStartDate",
          value: value
        });
      }
    },
    asap: {
      get() {
        return this.$store.getters.getAsap;
      },
      set(value) {
        this.$store.dispatch("setThirdStepField", {
          field: "asap",
          value: value
        });
      }
    }
  },

  methods: {
    submit() {
      this.$router.push({ path: "/education" });
    },
    back() {
      this.$router.push({ path: "/basic-information" });
    }
  },

  components: {
    PrimaryTemplate,
    CustomDropdownComponent,
    ToggleButton,
    InputComponent,
    MonthPicker
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.salary-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 650px;
  width: 100%;
  margin-top: 28px;
  color: $text-grey;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  .divider {
    margin-right: 12px;
    margin-left: 6px;
  }
  &.custom-position {
    margin-top: 0;
  }
}
.work-start-section {
  display: flex;
  flex-direction: column;
  padding: 6px 6px 28px 0px;
  max-width: 630px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  .month-picker {
    max-width: 296px;
  }
  .label,
  .section-label {
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
  }
  .section-label {
    margin-left: 6px;
    margin-bottom: 6px;
  }
}
.work-start-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .asap-container {
    max-width: 170px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 25px;
    @media (max-width: 768px) {
      margin-left: 62px;
    }
    @media (max-width: 425px) {
      margin-left: 0;
      margin-top: 16px;
    }
    .asap-checkbox {
      -webkit-appearance: none;
      width: 22px;
      height: 22px;
      border: 1px solid $main-grey;
      border-radius: 5px;
      position: relative;
      &:checked {
        &:after {
          content: "\2714";
          font-size: 18px;
          position: absolute;
          top: -1px;
          left: 3px;
          color: $template-color;
          width: 15px;
          height: 22px;
          display: flex;
          justify-content: center;
        }
      }
    }
    .label {
      margin-left: 10px;
    }
  }
}
</style>
