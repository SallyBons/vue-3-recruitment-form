const moduleExtraInfo = {
  state: () => ({
    extraInfo: "",
    files: []
  }),
  getters: {
    getExtraInfo(state) {
      return state.extraInfo;
    },
    getFiles(state) {
      return state.files;
    }
  },
  mutations: {
    setExtraInfo(state, data) {
      state.extraInfo = data;
    },
    setFiles(state, data) {
      state.files = data;
    }
  },
  actions: {
    setLastStepField(context, payload) {
      switch (payload.field) {
        case "extraInfo":
          context.commit("setExtraInfo", payload.value);
          break;
        case "files":
          context.commit("setFiles", payload.value);
          break;
        default:
          "";
          break;
      }
    }
  }
};

export { moduleExtraInfo };
