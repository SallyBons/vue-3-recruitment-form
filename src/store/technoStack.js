const moduleTechnoStack = {
  state: () => ({
    os: "",
    database: "",
    programmingLanguage: "",
    otherTech: "",
    backendFramework: "",
    frontEndFramework: "",
    mobileFramework: ""
  }),
  getters: {
    getOS(state) {
      return state.os;
    },
    getDatabase(state) {
      return state.database;
    },
    getProgrammingLanguage(state) {
      return state.programmingLanguage;
    },
    getOtherTech(state) {
      return state.otherTech;
    },
    getBackendFramework(state) {
      return state.backendFramework;
    },
    getFrontEndFramework(state) {
      return state.frontEndFramework;
    },
    getMobileFramework(state) {
      return state.mobileFramework;
    }
  },
  mutations: {
    setOS(state, data) {
      state.os = data;
    },
    setDatabase(state, data) {
      state.database = data;
    },
    setProgrammingLanguage(state, data) {
      state.programmingLanguage = data;
    },
    setOtherTech(state, data) {
      state.otherTech = data;
    },
    setBackendFramework(state, data) {
      state.backendFramework = data;
    },
    setFrontEndFramework(state, data) {
      state.frontEndFramework = data;
    },
    setMobileFramework(state, data) {
      state.mobileFramework = data;
    }
  },
  actions: {
    setFifthStepField(context, payload) {
      switch (payload.field) {
        case "os":
          context.commit("setOS", payload.value);
          break;
        case "database":
          context.commit("setDatabase", payload.value);
          break;

        case "programmingLanguage":
          context.commit("setProgrammingLanguage", payload.value);
          break;

        case "otherTech":
          context.commit("setOtherTech", payload.value);
          break;
        case "backendFramework":
          context.commit("setBackendFramework", payload.value);
          break;
        case "frontEndFramework":
          context.commit("setFrontEndFramework", payload.value);
          break;
        case "mobileFramework":
          context.commit("setMobileFramework", payload.value);
          break;

        default:
          "";
          break;
      }
    }
  }
};

export { moduleTechnoStack };
