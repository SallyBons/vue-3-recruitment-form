import { createStore } from "vuex";
import { moduleIntro } from "./intro";
import { moduleBasicInfo } from "./basicInfo";
import { moduleExpectations } from "./expectations";
import { moduleEducation } from "./education";
import { moduleExperience } from "./experience";
import { moduleTechnoStack } from "./technoStack";
import { moduleExtraInfo } from "./extraInfo";

export default createStore({
  modules: {
    intro: moduleIntro,
    basicInfo: moduleBasicInfo,
    expectations: moduleExpectations,
    education: moduleEducation,
    experience: moduleExperience,
    technoStack: moduleTechnoStack,
    extraInfo: moduleExtraInfo
  }
});
