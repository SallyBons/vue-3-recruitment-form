<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :mainTitle="'Образование'"
    :needBackButton="true"
    :backFunction="back"
  >
    <div
      class="education-card"
      v-for="(education, counter) in educationList"
      :key="counter"
    >
      <SingleEducation :education="education" :counter="counter" />
    </div>
    <AddButtonComponent
      :addText="'учебное заведение'"
      :addNewHandler="addNewEducation"
      v-show="newEducationIsAllowed"
    />
    <h2 class="card-heading">Курсы</h2>
    <div
      class="courses-card"
      v-for="(course, counter) in courses"
      :key="counter"
    >
      <SingleCourse :course="course" :counter="counter" />
    </div>
    <AddButtonComponent
      :addText="'курс'"
      :addNewHandler="addNewCourse"
      v-show="newCourseIsAllowed"
    />
    <h2 class="card-heading">Иностранные языки</h2>
    <div
      class="languages-card"
      v-for="(language, counter) in languages"
      :key="counter"
    >
      <SingleLanguage :language="language" :counter="counter" />
    </div>
    <AddButtonComponent
      :addText="'язык'"
      :addNewHandler="addNewLanguage"
      v-show="newLanguageIsAllowed"
    />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import AddButtonComponent from "@/components/serviceComponents/AddButtonComponent.vue";
import SingleEducation from "@/components/SingleEducation.vue";
import SingleCourse from "@/components/SingleCourse.vue";
import SingleLanguage from "@/components/SingleLanguage.vue";

import { allowFunction } from "@/utils/allowFunction";

export default {
  name: "Education",
  data() {
    return {
      step: "Education",
      levels: [
        "А1 - Начальный уровень",
        "A2 - Элементарный уровень",
        "B1 - Средний уровень",
        "B2 - Средне-продвинутый уровень",
        "C1 - Продвинутый уровень",
        "C2 - Владение в совершенстве"
      ]
    };
  },
  computed: {
    educationList: function() {
      return this.$store.getters.getEducationList;
    },
    courses: function() {
      return this.$store.getters.getCourses;
    },
    languages: function() {
      return this.$store.getters.getLanguages;
    },
    newEducationIsAllowed: function() {
      if (this.educationList.length > 1) {
        return allowFunction(this.educationList, "university");
      }
      return true;
    },
    newCourseIsAllowed: function() {
      if (this.courses.length > 1) {
        return allowFunction(this.courses, "title");
      }
      return true;
    },
    newLanguageIsAllowed: function() {
      for (let index = 0; index < this.languages.length; index++) {
        const element = this.languages[index];
        if (element.language.length === 0 || element.level.length === 0) {
          return false;
        }
      }
      return true;
    }
  },

  methods: {
    addNewEducation() {
      this.$store.dispatch("addNewEducation", {
        university: "",
        faculty: "",
        specialization: "",
        startEducationDate: "",
        endEducationDate: ""
      });
    },
    addNewCourse() {
      this.$store.dispatch("addNewCourse", {
        title: "",
        specialization: "",
        author: "",
        startCourseDate: "",
        endCourseDate: ""
      });
    },
    addNewLanguage() {
      this.$store.dispatch("addNewLanguage", {
        language: "",
        level: ""
      });
    },
    submit() {
      this.$router.push({ path: "/experience" });
    },
    back() {
      this.$router.push({ path: "/expectations" });
    }
  },
  components: {
    PrimaryTemplate,
    AddButtonComponent,
    SingleEducation,
    SingleCourse,
    SingleLanguage
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.languages-card,
.education-card,
.courses-card {
  width: 100%;
}

.education-period-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px 28px 0px;
  margin-top: 24px;
  box-sizing: border-box;
}
.card-heading {
  color: $text-black;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 35px;
  text-align: left;
  width: 100%;
  @media (min-width: 320px) and(max-width: 375px) {
    font-size: 16px;
  }
}
</style>
