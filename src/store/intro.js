const moduleIntro = {
  state: () => ({
    firstName: "",
    lastName: "",
    email: ""
  }),
  getters: {
    getFirstName(state) {
      return state.firstName;
    },
    getLastName(state) {
      return state.lastName;
    },
    getEmail(state) {
      return state.email;
    }
  },
  mutations: {
    setFirstName(state, data) {
      state.firstName = data;
    },
    setLastName(state, data) {
      state.lastName = data;
    },
    setEmail(state, data) {
      state.email = data;
    }
  },
  actions: {
    setFirstStepField(context, payload) {
      switch (payload.field) {
        case "firstName":
          context.commit("setFirstName", payload.value);
          break;
        case "lastName":
          context.commit("setLastName", payload.value);
          break;

        case "email":
          context.commit("setEmail", payload.value);
          break;

        default:
          "";
          break;
      }
    }
  }
};

export { moduleIntro };
