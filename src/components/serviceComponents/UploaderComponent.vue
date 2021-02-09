<template>
  <div class="uploader-component">
    <label for="file-upload" class="uploader-label">
      {{ title }}
    </label>
    <input
      class="uploader"
      id="file-upload"
      type="file"
      accept=".jpg, .jpeg, .png, .pdf"
      ref="file"
      multiple
      @change="handleFileUpload"
    />

    <div class="uploader-chosen-values-wrapper">
      <div class="chosen-value" v-for="item in files" :key="item.name">
        <span class="value-text">{{ item.name }}</span>
        <span
          class="delete-value-icon"
          @click="handleDeleteValue(item.name)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploaderComponent",
  props: {
    title: String
  },
  data() {
    return {
      files: []
    };
  },

  methods: {
    handleFileUpload() {
      this.files = [];
      this.files.push(...this.$refs.file.files);
      this.$store.dispatch("setLastStepField", {
        field: "files",
        value: this.files
      });
    },
    handleDeleteValue(name) {
      this.files = this.files.filter(el => el.name !== name);
      this.$store.dispatch("setLastStepField", {
        field: "files",
        value: this.files
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.uploader-component {
  display: flex;
  justify-content: space-between;
  max-width: 630px;
  width: 100%;
  position: relative;
  @media (max-width: 375px) {
    flex-direction: column-reverse;
  }

  .uploader-label {
    color: $template-color;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 6px;
    margin-left: 30px;
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      top: -3px;
      left: -30px;
      background-image: url("../../assets/images/clip-icon.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 24px;
      height: 24px;
    }
  }

  .uploader {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .uploader-chosen-values-wrapper {
    .chosen-value {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      color: $text-dark;
      display: flex;
      justify-content: space-between;
      margin-bottom: 11px;

      .value-text {
        margin-top: 4px;
      }
      .delete-value-icon {
        background-image: url("../../assets/images/trash-icon.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-left: 8px;
      }
    }
  }
}
</style>
