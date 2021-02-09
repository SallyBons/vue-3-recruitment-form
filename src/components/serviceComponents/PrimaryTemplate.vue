<template>
  <div class="main-template">
    <div class="content-wrapper">
      <div class="heading-wrapper">
        <h1 class="main-heading">{{ heading }}</h1>
      </div>
      <CardTemplate
        :step="step"
        :buttonFunction="buttonFunction"
        :backFunction="backFunction"
        :needBackButton="needBackButton"
        :nextButtonText="nextButtonText"
      >
        <div class="main-title-wrapper">
          <h1 class="main-title">{{ mainTitle }}</h1>
          <slot name="toggleButton"></slot>
        </div>

        <!-- slot content start -->
        <slot></slot>
        <!-- slot content end -->
      </CardTemplate>
    </div>
  </div>
</template>

<script>
import CardTemplate from "@/components/serviceComponents/CardTemplate.vue";

export default {
  name: "PrimaryTemplate",
  props: {
    step: String,
    buttonFunction: Function,
    mainTitle: String,
    needBackButton: Boolean,
    backFunction: Function,
    nextButtonText: {
      type: String,
      default: "Далее"
    },
    isShowToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      heading: "Анкета кандидата",
      firstWork: true
    };
  },
  components: {
    CardTemplate
  }
};
</script>
<style lang="scss">
.main-title-wrapper {
  .toggle-wrapper {
    width: 60% !important;
    @media (max-width: 375px) {
      width: 155% !important;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.main-template {
  background-color: $template-color;
  min-height: 100vh;
  padding: 0 15px;
  position: relative;
}

.content-wrapper {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}

.heading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 332px;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 42px;

  @media (max-width: 768.8px) {
    padding: 25px 0;
    justify-content: flex-start;
  }
}

.main-heading {
  color: $main-heading-color;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 20px;
  @media (max-width: 768.8px) {
    font-size: 25px;
  }
}

.main-title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
  .main-title {
    color: $text-black;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    text-align: left;
    width: 100%;
    @media (min-width: 320px) and(max-width: 375px) {
      font-size: 16px;
    }
  }
}
</style>
