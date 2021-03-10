<template>
  <div>
    <div class="box">
      <div class="title-tag">
        <p class="p-tag">step3</p>
        <h2 class="title">ご相談内容をご記入ください</h2>
      </div>
      <p class="soudan">-ご相談内容-</p>
      <textarea id="textarea" cols="90" rows="20" v-model="textarea"></textarea>
    </div>
    <button id="next-page" @click="toStep2">前へ戻る></button>
    <button id="next-page" @click="toConclusion">次へ進む></button>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    toStep2(){//Step2へのルーター
      this.$router.push('Step2')
    },
    toConclusion(){
      this.$router.push('conclusion')
    }
  },
  computed:{
    textarea:{
      get(){
        return this.$store.state.textarea;
      },
      set(textarea){
        this.$store.commit('settextarea',textarea);
      }
    }
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
  top: 54px;
  left: 10;
  background-color: dodgerblue;
}
.soudan {
  text-align: left;
  margin-left: 50px;
}
#next-page {
  width: 100px;
  height: 30px;
  background-color: rgb(55, 203, 59);
  margin-top: 30px;
  margin: 10px;
}
#textarea{
  margin-bottom: 20px;
}
</style>