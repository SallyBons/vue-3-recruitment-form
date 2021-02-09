<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :needBackButton="false"
  >
    <InputComponent
      :title="'Имя'"
      :mandatory="true"
      :placeholder="'Ваше имя'"
      v-model="firstName"
      :errorMessage="errorMessages.firstName"
    />

    <InputComponent
      :title="'Фамилия'"
      :mandatory="true"
      :placeholder="'Ваша фамилия'"
      v-model="lastName"
      :errorMessage="errorMessages.lastName"
    />
    <InputComponent
      :title="'E-mail'"
      :mandatory="true"
      :placeholder="'E-mail'"
      v-model="email"
      :errorMessage="errorMessages.email"
      validateOn="change"
    />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import { required, email, numeric, not } from "@vuelidate/validators";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export default {
  name: "Intro",
  data() {
    return {
      step: "Intro"
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.getters.getFirstName;
      },
      set(value) {
        this.$store.dispatch("setFirstStepField", {
          field: "firstName",
          value: value
        });
      }
    },
    lastName: {
      get() {
        return this.$store.getters.getLastName;
      },
      set(value) {
        this.$store.dispatch("setFirstStepField", {
          field: "lastName",
          value: value
        });
      }
    },
    email: {
      get() {
        return this.$store.getters.getEmail;
      },
      set(value) {
        this.$store.dispatch("setFirstStepField", {
          field: "email",
          value: value
        });
      }
    },
    errorMessages: function() {
      return {
        firstName: getErrorMessage(this.$v.firstName.$errors),
        lastName: getErrorMessage(this.$v.lastName.$errors),
        email: getErrorMessage(this.$v.email.$errors)
      };
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push({ path: "/basic-information" });
      }
    }
  },

  components: {
    PrimaryTemplate,
    InputComponent
  },

  validations() {
    return {
      firstName: {
        required,
        isValid: not(numeric),
        $autoDirty: true
      },
      lastName: {
        required,
        isValid: not(numeric),
        $autoDirty: true
      },
      email: {
        required,
        email,
        $autoDirty: true
      }
    };
  }
};
</script>
