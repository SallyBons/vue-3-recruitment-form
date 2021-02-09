<template>
  <FormDividerComponent
    v-if="counter > 0"
    :counter="counter"
    :id="education.id"
    :actionName="'removeEducation'"
    :title="'выбранное учреждение'"
    :text="'образование'"
  />
  <InputComponent
    :title="'Учебное заведение'"
    :mandatory="false"
    :placeholder="'Введите ваше учебное заведение'"
    v-model="university"
  />
  <InputComponent
    :title="'Факультет'"
    :mandatory="false"
    :placeholder="'Введите факультет'"
    v-model="faculty"
  />
  <InputComponent
    :title="'Специальность'"
    :mandatory="false"
    :placeholder="'Введите специальность'"
    v-model="specialization"
  />
  <div class="education-period-wrapper">
    <MonthPicker
      :title="'Дата начала'"
      :placeholder="'Выберите дату'"
      v-model="startEducationDate"
    />
    <MonthPicker
      :title="'Дата окончания'"
      :placeholder="'Выберите дату'"
      v-model="endEducationDate"
    />
  </div>
</template>

<script>
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import MonthPicker from "../components/serviceComponents/MonthPicker";
import FormDividerComponent from "@/components/serviceComponents/FormDividerComponent.vue";

export default {
  name: "SingleEducation",
  props: {
    education: Object,
    counter: Number
  },
  computed: {
    university: {
      get() {
        return this.education.university;
      },
      set(value) {
        this.$store.dispatch("updateEducationById", {
          id: this.education.id,
          fields: {
            university: value
          }
        });
      }
    },
    faculty: {
      get() {
        return this.education.faculty;
      },
      set(value) {
        this.$store.dispatch("updateEducationById", {
          id: this.education.id,
          fields: {
            faculty: value
          }
        });
      }
    },
    specialization: {
      get() {
        return this.education.specialization;
      },
      set(value) {
        this.$store.dispatch("updateEducationById", {
          id: this.education.id,
          fields: {
            specialization: value
          }
        });
      }
    },
    startEducationDate: {
      get() {
        return this.education.startEducationDate;
      },
      set(value) {
        this.$store.dispatch("updateEducationById", {
          id: this.education.id,
          fields: {
            startEducationDate: value
          }
        });
      }
    },
    endEducationDate: {
      get() {
        return this.education.endEducationDate;
      },
      set(value) {
        this.$store.dispatch("updateEducationById", {
          id: this.education.id,
          fields: {
            endEducationDate: value
          }
        });
      }
    }
  },
  components: {
    InputComponent,
    MonthPicker,
    FormDividerComponent
  }
};
</script>

<style lang="scss" scoped>
.education-period-wrapper {
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
