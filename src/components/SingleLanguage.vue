<template>
  <FormDividerComponent
    v-if="counter > 0"
    :counter="counter"
    :id="language.id"
    :actionName="'removeLanguage'"
    :title="'выбранный язык'"
    :text="'язык'"
  />
  <div class="languages-wrapper">
    <InputComponent
      :title="'Иностранный язык'"
      :mandatory="false"
      :placeholder="'Введите язык'"
      v-model="singleLanguage"
    />
    <CustomDropdownComponent
      :title="'Уровень'"
      :placeholder="'Выберите уровень'"
      :options="levels"
      v-model="level"
    />
  </div>
</template>

<script>
import InputComponent from "@/components/serviceComponents/InputComponent.vue";
import CustomDropdownComponent from "@/components/serviceComponents/CustomDropdownComponent.vue";
import FormDividerComponent from "@/components/serviceComponents/FormDividerComponent.vue";

export default {
  name: "SingleLanguage",
  props: {
    language: Object,
    counter: Number
  },
  data() {
    return {
      levels: [
        "А1 - Начальный уровень",
        "A2 - Элементарный уровень",
        "B1 - Средний уровень",
        "B2 - Средне-продвинутый уровень",
        "C1 - Продвинутый уровень",
        "C2 - Владение в совершенстве"
      ]
    };
  },
  computed: {
    singleLanguage: {
      get() {
        return this.language.language;
      },
      set(value) {
        this.$store.dispatch("updateLanguageById", {
          id: this.language.id,
          fields: {
            language: value
          }
        });
      }
    },
    level: {
      get() {
        return this.language.level;
      },
      set(value) {
        this.$store.dispatch("updateLanguageById", {
          id: this.language.id,
          fields: {
            level: value
          }
        });
      }
    }
  },
  components: {
    InputComponent,
    CustomDropdownComponent,
    FormDividerComponent
  }
};
</script>

<style lang="scss" scoped>
.languages-wrapper {
  display: flex;
  .custom-dropdown-component {
    margin-left: 30px;
    @media (max-width: 425px) {
      margin-left: 0;
    }
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
}
</style>
