<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :mainTitle="'Возможно Вы хотели что-то дополнить?'"
    :needBackButton="true"
    :backFunction="back"
    :nextButtonText="'Отправить'"
  >
    <TextAreaComponent
      :title="'Что хотите дополнить?'"
      :placeholder="'Текст'"
      v-model="extraInfo"
    />

    <UploaderComponent :title="'Прикрепить файл'" v-model="file" />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import TextAreaComponent from "@/components/serviceComponents/TextAreaComponent.vue";
import UploaderComponent from "@/components/serviceComponents/UploaderComponent.vue";

export default {
  name: "ExtraInfo",
  data() {
    return {
      step: "ExtraInfo"
    };
  },
  methods: {
    submit() {
      this.$router.push({ path: "/answers-saved" });
    },
    back() {
      this.$router.push({ path: "/technology-stack" });
    }
  },
  computed: {
    extraInfo: {
      get() {
        return this.$store.getters.getExtraInfo;
      },
      set(value) {
        this.$store.dispatch("setLastStepField", {
          field: "extraInfo",
          value: value
        });
      }
    }
  },
  components: {
    PrimaryTemplate,
    TextAreaComponent,
    UploaderComponent
  }
};
</script>
