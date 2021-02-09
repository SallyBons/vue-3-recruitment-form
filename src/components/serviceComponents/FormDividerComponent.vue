<template>
  <div class="form-divider">
    <div class="counter-mark">
      <p>#{{ counter + 1 }} {{ text }}</p>
    </div>
    <div class="divider-line"></div>
    <div class="delete-icon" @click="showModal = true"></div>
  </div>
  <ModalComponent
    v-if="showModal"
    :title="title"
    :submitHandler="deleteHandler"
    :cancelHandler="hideModalHandler"
  />
</template>
<script>
import ModalComponent from "@/components/serviceComponents/ModalComponent.vue";

export default {
  name: "FormDividerComponent",
  props: {
    counter: Number,
    id: String,
    actionName: String,
    title: String,
    text: String,
    workplaceId: {
      type: String,
      default: ""
    },
    attachTo: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    projectDeleteHandler() {
      this.$store.dispatch("removeProject", {
        workplaceId: this.workplaceId,
        id: this.id
      });
    },
    hideModalHandler() {
      this.showModal = false;
    }
  },
  computed: {
    deleteHandler: function() {
      switch (this.attachTo) {
        case "project":
          return () => {
            this.$store.dispatch("removeProject", {
              workplaceId: this.workplaceId,
              projectId: this.id
            });

            this.showModal = false;
          };

        default:
          return () => {
            this.$store.dispatch(this.actionName, this.id);
            this.showModal = false;
          };
      }
    }
  },
  components: {
    ModalComponent
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.form-divider {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 53px;
  margin-bottom: 15px;
  box-sizing: border-box;

  .counter-mark {
    color: $text-dark;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .divider-line {
    width: 100%;
    border-bottom: 1px solid $text-grey;
  }
  .delete-icon {
    background-image: url("../../assets/images/delete-icon.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>
