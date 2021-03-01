<template>
  <div>
    <div class="box">
      <div class="title-tag">
        <p class="p-tag">step2</p>
        <h2 class="title">以下にお答えください</h2>
      </div>
      <p>現在、生命保険に加入されていますか？</p>
      <input type="radio" @click="show2 = true" name="question1" />
      <label for="yes">はい</label>
      <input type="radio" @click="show2 = true" name="question1" />
      <label for="no">いいえ</label>
      <div style="display: none" v-show="show2">
        <p>
          現在入院中ですか？または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
        </p>
        <input type="radio" name="question2" @click="show3 = true">
        <label for="yes">はい</label>
        <input type="radio" name="question2" @click="show3 = true">
        <label for="no">いいえ</label>
      </div>
      <div style="display: none" v-show="show3">
        <p>
          過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありますか？
        </p>
        <input type="radio" name="question3">
        <label for="yes">はい</label>
        <input type="radio" name="question3">
        <label for="no">いいえ</label>
      </div>
    </div>
    <button id="next-page" @click="toStep1">前へ戻る></button>
    <button id="next-page" @click="toStep3">次へ進む></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show2:false,
      show3:false,
    }
  },
  methods:{
    // Show2(){
    //   this.show2 = !this.show2
    // },
    toStep3(){
      this.$router.push('Step3')
    },
    toStep1(){
      this.$router.push('/')
    },
  }
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
#next-page {
  width: 100px;
  height: 30px;
  background-color: rgb(55, 203, 59);
  margin-top: 30px;
  margin: 10px;
}
</style>