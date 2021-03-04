import Vue from "vue";
import Router from "vue-router";
const Step1 = () => import("./components/Step1.vue");
const Step2 = () => import("./components/Step2.vue");
const Step3 = () => import("./components/Step3.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Step1,
    },
    {
      path: "/Step2",
      component: Step2,
    },
    {
      path: "/Step3",
      component: Step3,
    },
  ],
});
