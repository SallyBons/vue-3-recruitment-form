import { generateUID } from "../utils/generateUID";

const moduleEducation = {
  state: () => ({
    educationList: [
      {
        id: generateUID(),
        university: "",
        faculty: "",
        specialization: "",
        startEducationDate: "",
        endEducationDate: ""
      }
    ],
    courses: [
      {
        id: generateUID(),
        title: "",
        specialization: "",
        author: "",
        startCourseDate: "",
        endCourseDate: ""
      }
    ],
    languages: [
      {
        id: generateUID(),
        language: "",
        level: ""
      }
    ]
  }),
  getters: {
    getEducationList(state) {
      return state.educationList;
    },
    getCourses(state) {
      return state.courses;
    },
    getLanguages(state) {
      return state.languages;
    }
  },
  mutations: {
    addEducation(state, data) {
      state.educationList.push({
        id: generateUID(),
        ...data
      });
    },
    removeEducation(state, id) {
      state.educationList = state.educationList.filter(el => el.id !== id);
    },

    addCourse(state, data) {
      state.courses.push({
        id: generateUID(),
        ...data
      });
    },
    removeCourse(state, id) {
      state.courses = state.courses.filter(el => el.id !== id);
    },

    addLanguage(state, data) {
      state.languages.push({
        id: generateUID(),
        ...data
      });
    },
    removeLanguage(state, id) {
      state.languages = state.languages.filter(el => el.id !== id);
    },
    updateEducationById(state, payload) {
      let foundIndex = state.educationList.findIndex(x => x.id == payload.id);
      state.educationList[foundIndex] = {
        ...state.educationList[foundIndex],
        ...payload.fields
      };
    },
    updateCourseById(state, payload) {
      let foundIndex = state.courses.findIndex(x => x.id == payload.id);
      state.courses[foundIndex] = {
        ...state.courses[foundIndex],
        ...payload.fields
      };
    },
    updateLanguageById(state, payload) {
      let foundIndex = state.languages.findIndex(x => x.id == payload.id);
      state.languages[foundIndex] = {
        ...state.languages[foundIndex],
        ...payload.fields
      };
    }
  },
  actions: {
    addNewEducation(context, payload) {
      context.commit("addEducation", payload);
    },
    removeEducation(context, id) {
      context.commit("removeEducation", id);
    },
    addNewCourse(context, payload) {
      context.commit("addCourse", payload);
    },
    removeCourse(context, id) {
      context.commit("removeCourse", id);
    },
    addNewLanguage(context, payload) {
      context.commit("addLanguage", payload);
    },
    removeLanguage(context, id) {
      context.commit("removeLanguage", id);
    },
    updateEducationById(context, payload) {
      context.commit("updateEducationById", payload);
    },
    updateCourseById(context, payload) {
      context.commit("updateCourseById", payload);
    },
    updateLanguageById(context, payload) {
      context.commit("updateLanguageById", payload);
    }
  }
};

export { moduleEducation };
