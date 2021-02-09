<template>
  <div class="progress"></div>
</template>

<script>
import { progressBar } from "../../utils/progressBar.js";

export default {
  name: "ProgressBar",
  props: {
    step: String
  },
  computed: {
    width: function() {
      return progressBar(this.step);
    },
    borderRadius() {
      if (this.step === "Intro") {
        return "10px 0px 0px 0px";
      } else if (this.step === "ExtraInfo") {
        return "10px 10px 0px 0px";
      }
      return "10px 0px 0px 0px";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.progress {
  width: 100%;
  height: 10px;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  &:before,
  &:after {
    content: " ";
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.3s ease;
  }

  &:before {
    width: 100%;
    background-color: $main-grey;
    z-index: -2;
    border-radius: 10px 10px 0px 0px;
  }
  &:after {
    background-color: $main-dark;
    width: v-bind(width);
    border-radius: v-bind(borderRadius);
    z-index: -1;
  }
}
</style>
