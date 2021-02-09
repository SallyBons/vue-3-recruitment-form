const moduleExpectations = {
  state: () => ({
    position: "",
    minSalary: "",
    optimalSalary: "",
    workStartDate: "",
    asap: false
  }),
  getters: {
    getPosition(state) {
      return state.position;
    },
    getMinSalary(state) {
      return state.minSalary;
    },
    getOptimalSalary(state) {
      return state.optimalSalary;
    },
    getWorkStartDate(state) {
      return state.workStartDate;
    },
    getAsapMarkValue(state) {
      return state.asap;
    }
  },
  mutations: {
    setPosition(state, data) {
      state.position = data;
    },
    setMinSalary(state, data) {
      state.minSalary = data;
    },
    setOptimalSalary(state, data) {
      state.optimalSalary = data;
    },
    setWorkStartDate(state, data) {
      state.workStartDate = data;
    },
    setAsapMarkValue(state, data) {
      state.asap = data;
    }
  },
  actions: {
    setThirdStepField(context, payload) {
      switch (payload.field) {
        case "position":
          context.commit("setPosition", payload.value);
          break;
        case "minSalary":
          context.commit("setMinSalary", payload.value);
          break;
        case "optimalSalary":
          context.commit("setOptimalSalary", payload.value);
          break;
        case "workStartDate":
          context.commit("setWorkStartDate", payload.value);
          break;

        case "asap":
          context.commit("setAsapMarkValue", payload.value);
          break;

        default:
          "";
          break;
      }
    }
  }
};

export { moduleExpectations };
