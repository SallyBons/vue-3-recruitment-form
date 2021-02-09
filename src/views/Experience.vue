<template>
  <PrimaryTemplate
    :step="step"
    :buttonFunction="submit"
    :mainTitle="'Опыт работы'"
    :needBackButton="true"
    :backFunction="back"
  >
    <template v-slot:toggleButton>
      <ToggleButton :text="'Ищу первое место работы'" v-model="firstWork" />
    </template>

    <div class="workplace-wrapper" v-if="!firstWork">
      <div
        class="workplace-card"
        v-for="(workplace, counter) in workplaces"
        :key="counter"
      >
        <Workplace :workplace="workplace" :counter="counter" />
      </div>
      <AddButtonComponent
        :addText="'место работы'"
        :addNewHandler="addNewWorkplace"
        v-show="newWorkplaceIsAllowed"
      />
    </div>

    <TextAreaComponent
      :title="'Почему Вы хотите у нас работать?'"
      :placeholder="'Текст'"
      v-model="reason"
    />

    <CustomDropdownComponent
      :title="'Откуда узнали о нас'"
      :placeholder="'Выберите позицию из списка'"
      v-model="infoSource"
      :options="infoSourceList"
    />
  </PrimaryTemplate>
</template>
<script>
import PrimaryTemplate from "@/components/serviceComponents/PrimaryTemplate.vue";
import TextAreaComponent from "@/components/serviceComponents/TextAreaComponent.vue";
import ToggleButton from "@/components/serviceComponents/ToggleButton.vue";
import CustomDropdownComponent from "@/components/serviceComponents/CustomDropdownComponent.vue";
import Workplace from "@/components/Workplace.vue";
import AddButtonComponent from "@/components/serviceComponents/AddButtonComponent.vue";
import { allowFunction } from "@/utils/allowFunction";

export default {
  name: "Experience",
  data() {
    return {
      step: "Experience",
      infoSourceList: [
        "Друзья/Коллеги",
        "Социальные сети",
        "Официальный сайт",
        "Сайты по поиску работы"
      ],
      firstWork: false
    };
  },
  computed: {
    workplaces: function() {
      return this.$store.getters.getWorkplaces;
    },
    reason: {
      get() {
        return this.$store.getters.getReason;
      },
      set(value) {
        this.$store.dispatch("setSixthStepField", {
          field: "reason",
          value: value
        });
      }
    },
    infoSource: {
      get() {
        return this.$store.getters.getInfoSource;
      },
      set(value) {
        this.$store.dispatch("setSixthStepField", {
          field: "infoSource",
          value: value
        });
      }
    },

    newWorkplaceIsAllowed: function() {
      if (this.workplaces.length > 1) {
        return allowFunction(this.workplaces, "workplaceName");
      }
      return true;
    }
  },

  methods: {
    addNewWorkplace() {
      this.$store.dispatch("addNewWorkplace", {
        workplaceName: "",
        workplacePosition: "",
        startWorkingDate: "",
        endWorkingDate: "",
        projects: [
          {
            projectTitle: "",
            projectDescription: "",
            projectIndustry: "",
            projectRole: "",
            nda: false
          }
        ]
      });
    },
    submit() {
      this.$router.push({ path: "/technology-stack" });
    },
    back() {
      this.$router.push({ path: "/education" });
    }
  },
  components: {
    PrimaryTemplate,
    TextAreaComponent,
    ToggleButton,
    CustomDropdownComponent,
    Workplace,
    AddButtonComponent
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.workplace-card,
.workplace-wrapper {
  width: 100%;
}
</style>
