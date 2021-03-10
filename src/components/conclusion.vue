<template>
  <div class="box">
    <div class="title-tag">
      <p class="p-tag">step2</p>
      <h2 class="title">以下にお答えください</h2>
    </div>
    <p class="pTag">-性別-</p>
    <p>{{ picked }}</p>
    <p class="pTag">-生年月日-</p>
    <p>{{ year }}年{{ month }}月{{ day }}日</p>
    <p class="pTag">-現在、生命保険に加入されていますか-</p>
    <p>{{ question1 }}</p>
    <p class="pTag">
      -現在入院中ですか？または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-
    </p>
    <p>{{ question2 }}</p>
    <p class="pTag">
      -過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありますか？-
    </p>
    <p>{{ question3 }}</p>
    <p class="pTag">-ご相談内容-</p>
    <p>{{ textarea }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    picked: {
      get() {
        return this.$store.state.picked;
      },
      set(value) {
        this.$store.commit("setpicked", value);
      },
    },
    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.$store.commit("setYear", value);
      },
    },
    month: {
      get() {
        return this.$store.state.month;
      },
      set(value) {
        this.$store.commit("setmonth", value);
      },
    },
    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit("setday", value);
      },
    },
    question1: {
      get() {
        return this.$store.state.question1;
      },
      set(value) {
        this.$store.commit("setquestion1", value);
      },
    },
    question2: {
      get() {
        return this.$store.state.question2;
      },
      set(value) {
        this.$store.commit("setquestion2", value);
      },
    },
    question3: {
      get() {
        return this.$store.state.question3;
      },
      set(value) {
        this.$store.commit("setquestion3", value);
      },
    },
    textarea: {
      get() {
        return this.$store.state.textarea;
      },
      set(value) {
        this.$store.commit("settextarea", value);
      },
    },
  },
};
</script>

<style scoped>
.box {
  border: 1px solid blue;
  width: 700px;
  margin: auto;
  margin-top: 50px;
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
  top: 55px;
  left: 10;
  background-color: dodgerblue;
}
.pTag{
  color:blue;
}
</style>
