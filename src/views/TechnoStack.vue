<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :needBackButton="true"
    :backFunction="back"
    :mainTitle="'Ваш технологический стек'"
  >
    <InputComponent
      :title="'Операционные системы'"
      :mandatory="false"
      :placeholder="'Например: Linux, Windows, Mac OS, iOS, Android и др.'"
      v-model="os"
    />
    <InputComponent
      :title="'База данных'"
      :mandatory="false"
      :placeholder="'Например: PostgreSQL, MongoDB, MySQL, MariaDB, BD2 и др.'"
      v-model="database"
    />
    <InputComponent
      :title="'Языки программирования'"
      :mandatory="false"
      :placeholder="'Например: Java, Python, Ruby, JavaScript, PHP и др.'"
      v-model="programmingLanguage"
    />
    <InputComponent
      :title="'Другие технологии'"
      :mandatory="false"
      :placeholder="'Например: REST, Memcached, Selenium, SQL и др.'"
      v-model="otherTech"
    />
    <InputComponent
      :title="'Backend фреймворки'"
      :mandatory="false"
      :placeholder="
        'Например: Spring, Ruby on Rails, Laravel, Flask, Express и др.'
      "
      v-model="backendFramework"
    />
    <InputComponent
      :title="'Frontend фреймворки'"
      :mandatory="false"
      :placeholder="'Например: React, Angular, Vue, Svelte и др.'"
      v-model="frontEndFramework"
    />
    <InputComponent
      :title="'Mobile фреймворки'"
      :mandatory="false"
      :placeholder="'Например: React Native, Ionic, PhoneGap, Cordova и др.'"
      v-model="mobileFramework"
    />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import InputComponent from "@/components/serviceComponents/InputComponent.vue";

export default {
  name: "TechnoStack",
  data() {
    return {
      step: "TechnoStack"
    };
  },
  computed: {
    os: {
      get() {
        return this.$store.getters.getOS;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "os",
          value: value
        });
      }
    },
    database: {
      get() {
        return this.$store.getters.getDatabase;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "database",
          value: value
        });
      }
    },

    programmingLanguage: {
      get() {
        return this.$store.getters.getProgrammingLanguage;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "programmingLanguage",
          value: value
        });
      }
    },

    otherTech: {
      get() {
        return this.$store.getters.getOtherTech;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "otherTech",
          value: value
        });
      }
    },

    backendFramework: {
      get() {
        return this.$store.getters.getBackendFramework;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "backendFramework",
          value: value
        });
      }
    },

    frontEndFramework: {
      get() {
        return this.$store.getters.getFrontEndFramework;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "frontEndFramework",
          value: value
        });
      }
    },

    mobileFramework: {
      get() {
        return this.$store.getters.getMobileFramework;
      },
      set(value) {
        this.$store.dispatch("setFifthStepField", {
          field: "mobileFramework",
          value: value
        });
      }
    }
  },

  methods: {
    submit() {
      this.$router.push({ path: "/extra-information" });
    },
    back() {
      this.$router.push({ path: "/experience" });
    }
  },

  components: {
    PrimaryTemplate,
    InputComponent
  }
};
</script>
