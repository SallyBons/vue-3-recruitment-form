import { generateUID } from "../utils/generateUID";

const moduleExperience = {
  state: () => ({
    workplaces: [
      {
        id: generateUID(),
        workplaceName: "",
        workplacePosition: "",
        startWorkingDate: "",
        endWorkingDate: "",
        projects: [
          {
            id: generateUID(),
            projectTitle: "",
            projectDescription: "",
            projectIndustry: "",
            projectRole: "",
            nda: false
          }
        ]
      }
    ],
    reason: "",
    infoSource: ""
  }),
  getters: {
    getWorkplaces(state) {
      return state.workplaces;
    },
    getReason(state) {
      return state.reason;
    },
    getInfoSource(state) {
      return state.infoSource;
    },
    getProjects: state => workplaceId => {
      return state.workplaces.filter(el => el.id === workplaceId)[0].projects;
    }
  },
  mutations: {
    addWorkplace(state, data) {
      state.workplaces.push({
        id: generateUID(),
        ...data
      });
    },
    removeWorkplace(state, id) {
      state.workplaces = state.workplaces.filter(el => el.id !== id);
    },

    updateWorkplaceById(state, payload) {
      let foundIndex = state.workplaces.findIndex(x => x.id == payload.id);
      state.workplaces[foundIndex] = {
        ...state.workplaces[foundIndex],
        ...payload.fields
      };
    },
    setReason(state, data) {
      state.reason = data;
    },
    setInfoSource(state, data) {
      state.infoSource = data;
    },

    addProject(state, payload) {
      let workplaceIndex = state.workplaces.findIndex(
        el => el.id === payload.workplaceId
      );
      state.workplaces[workplaceIndex].projects.push({
        id: generateUID(),
        ...payload.fields
      });
    },
    removeProject(state, payload) {
      let workplaceIndex = state.workplaces.findIndex(
        el => el.id === payload.workplaceId
      );
      state.workplaces[workplaceIndex].projects = state.workplaces[
        workplaceIndex
      ].projects.filter(project => project.id !== payload.projectId);
    },
    updateProjectOfWorkplaceById(state, payload) {
      let workplaceIndex = state.workplaces.findIndex(
        el => el.id === payload.workplaceId
      );
      let projectIndex = state.workplaces[workplaceIndex].projects.findIndex(
        x => x.id == payload.id
      );
      state.workplaces[workplaceIndex].projects[projectIndex] = {
        ...state.workplaces[workplaceIndex].projects[projectIndex],
        ...payload.fields
      };
    }
  },
  actions: {
    addNewWorkplace(context, payload) {
      context.commit("addWorkplace", payload);
    },
    removeWorkplace(context, id) {
      context.commit("removeWorkplace", id);
    },
    updateWorkplaceById(context, payload) {
      context.commit("updateWorkplaceById", payload);
    },
    setSixthStepField(context, payload) {
      switch (payload.field) {
        case "reason":
          context.commit("setReason", payload.value);
          break;
        case "infoSource":
          context.commit("setInfoSource", payload.value);
          break;
        default:
          "";
          break;
      }
    },
    addNewProject(context, payload, workplaceId) {
      context.commit("addProject", payload, workplaceId);
    },
    removeProject(context, id, workplaceId) {
      context.commit("removeProject", id, workplaceId);
    },
    updateProjectById(context, workplaceId, payload) {
      context.commit("updateProjectOfWorkplaceById", workplaceId, payload);
    }
  }
};

export { moduleExperience };
