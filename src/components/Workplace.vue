<template>
  <FormDividerComponent
    v-if="counter > 0"
    :counter="counter"
    :id="workplace.id"
    :actionName="'removeWorkplace'"
    :title="'место работы'"
    :text="'место работы'"
  />
  <InputComponent
    :title="'Место работы'"
    :mandatory="false"
    :placeholder="'Название'"
    v-model="workplaceName"
  />
  <InputComponent
    :title="'Занимаемая должность'"
    :mandatory="false"
    :placeholder="'Ваша должность'"
    v-model="workplacePosititon"
  />
  <div class="work-period-wrapper">
    <MonthPicker
      :title="'Дата начала'"
      :placeholder="'Выберите дату'"
      v-model="startWorkingDate"
    />
    <MonthPicker
      :title="'Дата окончания'"
      :placeholder="'Выберите дату'"
      v-model="endWorkingDate"
    />
  </div>
  <Projects :workplaceId="workplace.id" />
</template>

<script>
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import MonthPicker from "../components/serviceComponents/MonthPicker";
import FormDividerComponent from "@/components/serviceComponents/FormDividerComponent.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Workplace",
  props: {
    workplace: Object,
    counter: Number
  },
  computed: {
    workplaceName: {
      get() {
        return this.workplace.workplaceName;
      },
      set(value) {
        this.$store.dispatch("updateWorkplaceById", {
          id: this.workplace.id,
          fields: {
            workplaceName: value
          }
        });
      }
    },
    workplacePosititon: {
      get() {
        return this.workplace.workplacePosititon;
      },
      set(value) {
        this.$store.dispatch("updateWorkplaceById", {
          id: this.workplace.id,
          fields: {
            workplacePosititon: value
          }
        });
      }
    },
    startWorkingDate: {
      get() {
        return this.workplace.startWorkingDate;
      },
      set(value) {
        this.$store.dispatch("updateWorkplaceById", {
          id: this.workplace.id,
          fields: {
            startWorkingDate: value
          }
        });
      }
    },
    endWorkingDate: {
      get() {
        return this.workplace.endWorkingDate;
      },
      set(value) {
        this.$store.dispatch("updateWorkplaceById", {
          id: this.workplace.id,
          fields: {
            endWorkingDate: value
          }
        });
      }
    }
  },
  components: {
    InputComponent,
    MonthPicker,
    FormDividerComponent,
    Projects
  }
};
</script>

<style lang="scss" scoped>
.work-period-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px 28px 0px;
  margin-top: 24px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    .month-picker:nth-of-type(2) {
      margin-top: 40px;
    }
  }
}
</style>
