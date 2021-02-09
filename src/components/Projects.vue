<template>
  <div :class="['projects-wrapper', isOpened ? 'active' : '']">
    <div class="add-projects-button" @click="openProjectsHandler">
      <span class="add-project-text">Добавить проекты</span>
      <span :class="['add-project-icon', isOpened ? 'active' : '']"></span>
    </div>
    <div class="project-card-content-wrapper" v-if="isOpened">
      <div
        class="project-card"
        v-for="(project, counter) in projects"
        :key="counter"
      >
        <ProjectCardComponent
          :project="project"
          :counter="counter"
          :workplaceId="workplaceId"
        />
      </div>
      <div class="add-new-project-button-wrapper">
        <AddButtonComponent
          :addText="'проект'"
          :addNewHandler="addNewProject"
          v-show="newProjectIsAllowed"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardComponent from "@/components/ProjectCardComponent.vue";
import AddButtonComponent from "@/components/serviceComponents/AddButtonComponent.vue";

export default {
  name: "Projects",
  props: { workplaceId: String },
  data() {
    return {
      isOpened: true
    };
  },
  computed: {
    projects: function() {
      return this.$store.getters.getProjects(this.workplaceId);
    },
    newProjectIsAllowed: function() {
      for (let index = 0; index < this.projects.length; index++) {
        const element = this.projects[index];
        if (
          (element.projectTitle.length !== 0 &&
            element.projectDescription.length !== 0) ||
          element.nda
        ) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    addNewProject() {
      this.$store.dispatch("addNewProject", {
        workplaceId: this.workplaceId,
        fields: {
          projectTitle: "",
          projectDescription: "",
          projectIndustry: "",
          projectRole: "",
          nda: false
        }
      });
    },
    openProjectsHandler() {
      this.isOpened = !this.isOpened;
    }
  },
  components: { ProjectCardComponent, AddButtonComponent }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.projects-wrapper {
  .project-card-content-wrapper {
    .project-card {
      .input-component,
      .textarea-component {
        padding-left: 0;
      }
    }
  }
  .add-new-project-button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .add-button-wrapper {
      width: initial;
      margin-bottom: 20px;
      .add-icon {
        background-image: url("../assets/images/plus-square.svg");
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.projects-wrapper {
  margin: 6px 6px 28px 0px;
  padding: 0px 12px 0px 20px;
  max-width: 624px;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  border: 1px solid $main-grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.5s ease;
  &.active {
    border: 1px solid $template-color;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }

  .add-projects-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    .add-project-text {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      color: $template-color;
    }
    .add-project-icon {
      background-image: url("../assets/images/add-projects-icon.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      transition: all 0.3s ease;
      &.active {
        background-image: url("../assets/images/minus-icon.svg");
      }
    }
  }
}
</style>
