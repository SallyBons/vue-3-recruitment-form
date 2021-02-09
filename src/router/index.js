import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Intro.vue";

const routes = [
  {
    path: "/",
    name: "Intro",
    component: Intro
  },
  {
    path: "/basic-information",
    name: "BasicInfo",
    component: () => import("../views/BasicInfo.vue")
  },
  {
    path: "/expectations",
    name: "Expectations",
    component: () => import("../views/Expectations.vue")
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education.vue")
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue")
  },
  {
    path: "/technology-stack",
    name: "TechnoStack",
    component: () => import("../views/TechnoStack.vue")
  },
  {
    path: "/extra-information",
    name: "ExtraInfo",
    component: () => import("../views/ExtraInfo.vue")
  },
  {
    path: "/answers-saved",
    name: "AnswersSaved",
    component: () => import("../views/AnswersSaved.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
