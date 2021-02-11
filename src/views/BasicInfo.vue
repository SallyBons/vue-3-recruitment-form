<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :mainTitle="'Основная информация'"
    :needBackButton="false"
  >
    <BirthDayComponent :title="'Дата рождения'" />
    <InputComponent
      :title="'Адрес'"
      :mandatory="false"
      :placeholder="'Ваш адрес'"
      v-model="address"
    />

    <MobileTelephoneComponent :title="'Номер телефона'" />

    <InputComponent
      :title="'Skype'"
      :mandatory="false"
      :placeholder="'Ваш Skype'"
      v-model="skype"
    />
    <InputComponent
      :title="'GitHub'"
      :mandatory="false"
      :placeholder="'Ссылка на ваш GitHub'"
      v-model="github"
      :errorMessage="errorMessages.github"
    />
    <InputComponent
      :title="'Ссылка на любую социальную сеть'"
      :mandatory="false"
      :placeholder="'Ссылка на вашу страницу'"
      v-model="socialNetwork"
      :errorMessage="errorMessages.socialNetwork"
    />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import BirthDayComponent from "@/components/serviceComponents/BirthDayComponent.vue";
import MobileTelephoneComponent from "@/components/serviceComponents/MobileTelephoneComponent.vue";
import { url } from "@vuelidate/validators";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export default {
  name: "BasicInfo",
  data() {
    return {
      step: "BasicInfo",
    };
  },
  computed: {
    address: {
      get() {
        return this.$store.getters.getAddress;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "address",
          value: value,
        });
      },
    },
    skype: {
      get() {
        return this.$store.getters.getSkype;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "skype",
          value: value,
        });
      },
    },
    github: {
      get() {
        return this.$store.getters.getGithub;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "github",
          value: value,
        });
      },
    },
    socialNetwork: {
      get() {
        return this.$store.getters.getSocialNetwork;
      },
      set(value) {
        this.$store.dispatch("setSecondStepField", {
          field: "socialNetwork",
          value: value,
        });
      },
    },
    errorMessages: function () {
      return {
        github: getErrorMessage(this.$v.github.$errors),
        socialNetwork: getErrorMessage(this.$v.socialNetwork.$errors),
      };
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push({ path: "/expectations" });
      }
    },
  },

  components: {
    PrimaryTemplate,
    InputComponent,
    BirthDayComponent,
    MobileTelephoneComponent,
  },

  validations() {
    return {
      github: {
        url,
        $autoDirty: true,
      },
      socialNetwork: {
        url,
        $autoDirty: true,
      },
    };
  },
};
</script>
