import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    picked: "",
    year: "2018",
    month: "1",
    day: "1",
    question1: "",
    question2: "",
    question3: "",
    textarea: "",
  },
  mutations: {
    setpicked(state, picked) {
      state.picked = picked;
    },
    setyear(state, year) {
      state.year = year;
    },
    setmonth(state, month) {
      state.month = month;
    },
    setday(state, day) {
      state.day = day;
    },
    setquestion1(state, question1) {
      state.question1 = question1;
    },
    setquestion2(state, question2) {
      state.question2 = question2;
    },
    setquestion3(state, question3) {
      state.question3 = question3;
    },
    settextarea(state, textarea) {
      state.textarea = textarea;
    },
  },
});
