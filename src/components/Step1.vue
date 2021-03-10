<template>
  <div>
    <div class="box">
      <div class="title-tag">
        <p class="p-tag">step1</p>
        <h2 class="title">お客様の情報を入力してください</h2>
      </div>
      <p id="seibetu">-性別-</p>
      <input type="radio" id="man" value="男性" name="seibetu" v-model="picked"/>
      <label for="man">男性</label>
      <input type="radio" id="woman" value="女性" name="seibetu" v-model="picked"/>
      <label for="woman">女性</label>
      <p>生年月日</p>
      <form>
        <select v-model="year" @change="get_days">
          <option
            v-for="nengo in nengoes"
            :key="nengo.year"
            :value="nengo.year"
          >
            {{ nengo.label }}
          </option>
        </select>

        <select v-model="month" @change="get_days">
          <option v-for="n in 12" :value="n" :key="n">
            {{ n }}
          </option></select
        >月
        <select v-model="day">
          <option v-for="n in days_max" :value="n" :key="n">
            {{ n }}
          </option></select
        >日
      </form>
    </div>
    <button id="next-page" @click="toStep2">次へ進む></button>
    <router-view></router-view>
  </div>
</template>

 <script>
import common from "../helpers/definition";
export default {
  data() {
    return {
      nengoes: [],
      days_max: "1",
    };
  },
  computed:{
    picked:{
      get(){
        return this.$store.state.picked
      },
      set(value) {
        this.$store.commit('setpicked', value);
      },
    },
    year:{
      get(){
        return this.$store.state.year
      },
      set(year){
        this.$store.commit('setyear',year);
      }
    },
    month:{
      get(){
        return this.$store.state.month
      },
      set(month){
        this.$store.commit('setmonth',month);
      }
    },
    day:{
      get(){
        return this.$store.state.day
      },
      set(day){
        this.$store.commit('setday',day);
      }
    },
  },
  mounted() {
    this.nengoes = common.genereate();
  },
  methods: {
    toStep2() {//Step2へのルーター
      this.$router.push("Step2");
    },
    get_days() {//月の最大日数を取得
      this.days_max = common.get_days(this.year, this.month);
    },
    genereate() {//外部jsを参照
      this.nengoes = common.genereate();
    },
  },
};
</script>

<style>
.box {
  border: 1px solid blue;
  width: 700px;
  margin: auto;
}
.title-tag {
  background-color: red;
}
.title {
  z-index: 2;
}
.p-tag {
  position: absolute;
  z-index: 1;
  top: 13px;
  left: 10;
  background-color: dodgerblue;
}
#next-page {
  width: 100px;
  height: 30px;
  background-color: rgb(55, 203, 59);
  margin-top: 30px;
}
</style>