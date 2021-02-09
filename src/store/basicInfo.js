const moduleBasicInfo = {
  state: () => ({
    birthDayDate: {
      day: "",
      month: "",
      year: ""
    },
    address: "",
    number: "",
    code: {},
    skype: "",
    github: "",
    socialNetwork: ""
  }),
  getters: {
    getBirthDayDate(state) {
      return state.birthDayDate;
    },
    getAddress(state) {
      return state.address;
    },
    getNumber(state) {
      return state.number;
    },
    getCode(state) {
      return state.code;
    },
    getSkype(state) {
      return state.skype;
    },
    getGithub(state) {
      return state.github;
    },
    getSocialNetwork(state) {
      return state.socialNetwork;
    }
  },
  mutations: {
    setBirthDayDate(state, data) {
      state.birthDayDate.day = data.day;
      state.birthDayDate.month = data.month;
      state.birthDayDate.year = data.year;
    },
    setAddress(state, data) {
      state.address = data;
    },
    setNumber(state, data) {
      state.number = data;
    },
    setCode(state, data) {
      state.code = data;
    },
    setSkype(state, data) {
      state.skype = data;
    },
    setGithub(state, data) {
      state.github = data;
    },
    setSocialNetwork(state, data) {
      state.socialNetwork = data;
    }
  },
  actions: {
    setSecondStepField(context, payload) {
      switch (payload.field) {
        case "birthDayDate":
          context.commit("setBirthDayDate", payload.value);
          break;
        case "address":
          context.commit("setAddress", payload.value);
          break;
        case "number":
          context.commit("setNumber", payload.value);
          break;
        case "code":
          context.commit("setCode", payload.value);
          break;
        case "skype":
          context.commit("setSkype", payload.value);
          break;

        case "github":
          context.commit("setGithub", payload.value);
          break;

        case "socialNetwork":
          context.commit("setSocialNetwork", payload.value);
          break;

        default:
          "";
          break;
      }
    }
  }
};

export { moduleBasicInfo };
