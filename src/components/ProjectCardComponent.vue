<template>
  <FormDividerComponent
    v-if="counter > 0"
    :counter="counter"
    :id="project.id"
    :workplaceId="workplaceId"
    :actionName="'removeProject'"
    :title="'выбранный проект'"
    :text="'проект'"
    attachTo="project"
  />
  <InputComponent
    :title="'Название проекта'"
    :mandatory="false"
    :placeholder="'Проект'"
    v-model="projectTitle"
  />
  <TextAreaComponent
    :title="'Описание проекта'"
    :placeholder="'Введите краткое описание проекта'"
    v-model="projectDescription"
  />

  <div class="industry-and-role-wrapper">
    <InputComponent
      :title="'Индустрия'"
      :mandatory="false"
      :placeholder="'Индустрия'"
      v-model="projectIndustry"
    />
    <InputComponent
      :title="'Ваша роль'"
      :mandatory="false"
      :placeholder="'Роль на проекте'"
      v-model="projectRole"
    />
  </div>

  <div class="nda-container">
    <input class="nda-checkbox" type="checkbox" v-model="nda" />
    <label for="nda-checkbox" class="label"> Разрабатывал проект под NDA</label>
  </div>
</template>

<script>
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import TextAreaComponent from "@/components/serviceComponents/TextAreaComponent.vue";
import FormDividerComponent from "@/components/serviceComponents/FormDividerComponent.vue";

export default {
  name: "ProjectCardComponent",
  props: {
    project: Object,
    counter: Number,
    workplaceId: String
  },
  computed: {
    projectTitle: {
      get() {
        return this.project.projectTitle;
      },
      set(value) {
        this.$store.dispatch("updateProjectById", {
          id: this.project.id,
          workplaceId: this.workplaceId,
          fields: {
            projectTitle: value
          }
        });
      }
    },
    projectDescription: {
      get() {
        return this.project.projectDescription;
      },
      set(value) {
        this.$store.dispatch("updateProjectById", {
          id: this.project.id,
          workplaceId: this.workplaceId,
          fields: {
            projectDescription: value
          }
        });
      }
    },
    projectIndustry: {
      get() {
        return this.project.projectIndustry;
      },
      set(value) {
        this.$store.dispatch("updateProjectById", {
          id: this.project.id,
          workplaceId: this.workplaceId,
          fields: {
            projectIndustry: value
          }
        });
      }
    },
    projectRole: {
      get() {
        return this.project.projectRole;
      },
      set(value) {
        this.$store.dispatch("updateProjectById", {
          id: this.project.id,
          workplaceId: this.workplaceId,
          fields: {
            projectRole: value
          }
        });
      }
    },
    nda: {
      get() {
        return this.project.nda;
      },
      set(value) {
        this.$store.dispatch("updateProjectById", {
          id: this.project.id,
          workplaceId: this.workplaceId,
          fields: {
            nda: value
          }
        });
      }
    }
  },
  components: {
    InputComponent,
    TextAreaComponent,
    FormDividerComponent
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.industry-and-role-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-component:nth-of-type(2) {
    margin-left: 30px;
    @media (max-width: 425px) {
      margin-left: 0;
    }
  }
}

.nda-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 425px) {
    margin-left: 0;
    margin-top: 16px;
  }
  .nda-checkbox {
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
    color: $text-grey;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-left: 10px;
  }
}
</style>
