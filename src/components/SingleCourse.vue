<template>
  <FormDividerComponent
    v-if="counter > 0"
    :counter="counter"
    :id="course.id"
    :actionName="'removeCourse'"
    :title="'выбранный курс'"
    :text="'курс'"
  />
  <InputComponent
    :title="'Название курса'"
    :mandatory="false"
    :placeholder="'Введите название курса'"
    v-model="courseTitle"
  />
  <InputComponent
    :title="'Специальность'"
    :mandatory="false"
    :placeholder="'Введите специальность'"
    v-model="courseSpecialization"
  />
  <InputComponent
    :title="'Автор курса'"
    :mandatory="false"
    :placeholder="'Введите автора курса'"
    v-model="courseAuthor"
  />
  <div class="course-period-wrapper">
    <MonthPicker
      :title="'Дата начала'"
      :placeholder="'Выберите дату'"
      v-model="startCourseDate"
    />
    <MonthPicker
      :title="'Дата окончания'"
      :placeholder="'Выберите дату'"
      v-model="endCourseDate"
    />
  </div>
</template>

<script>
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import MonthPicker from "../components/serviceComponents/MonthPicker";
import FormDividerComponent from "@/components/serviceComponents/FormDividerComponent.vue";

export default {
  name: "SingleCourse",
  props: {
    course: Object,
    counter: Number
  },
  computed: {
    courseTitle: {
      get() {
        return this.course.title;
      },
      set(value) {
        this.$store.dispatch("updateCourseById", {
          id: this.course.id,
          fields: {
            title: value
          }
        });
      }
    },
    courseSpecialization: {
      get() {
        return this.course.specialization;
      },
      set(value) {
        this.$store.dispatch("updateCourseById", {
          id: this.course.id,
          fields: {
            specialization: value
          }
        });
      }
    },
    courseAuthor: {
      get() {
        return this.course.author;
      },
      set(value) {
        this.$store.dispatch("updateCourseById", {
          id: this.course.id,
          fields: {
            author: value
          }
        });
      }
    },
    startCourseDate: {
      get() {
        return this.course.startCourseDate;
      },
      set(value) {
        this.$store.dispatch("updateCourseById", {
          id: this.course.id,
          fields: {
            startCourseDate: value
          }
        });
      }
    },
    endCourseDate: {
      get() {
        return this.course.endCourseDate;
      },
      set(value) {
        this.$store.dispatch("updateCourseById", {
          id: this.course.id,
          fields: {
            endCourseDate: value
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
.course-period-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px 28px 0px;
  margin-top: 24px;
  box-sizing: border-box;
  .month-picker:nth-of-type(2) {
    margin-left: 26px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    .month-picker:nth-of-type(2) {
      margin-top: 40px;
      margin-left: 0;
    }
  }
}
</style>
