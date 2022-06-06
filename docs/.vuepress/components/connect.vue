<template>
  <div class="container" @click="toggle">
    <div v-for="(src, i) in assets" :key="i" class="item" :class="{show: showIdx === i}">
        <img :src="src" :data-id="i">
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      assets: [
          "/assets/img/wechat.jpeg",
          "/assets/img/qq.jpeg",
          "/assets/img/leetcode.png",
          "/assets/img/github.jpeg",
      ],
      showIdx: 0
    }
  },
  methods: {
      toggle(e) {
          if (e.target.hasAttribute('data-id')) {
            this.showIdx = +e.target.getAttribute('data-id');
          }
          e.stopImmediatePropagation();
      }
  }
}
</script>

<style scoped>
.container {
    display: flex;
    width: 90%;
    height: 30vw;
    overflow: hidden;
    border: 10px solid rgb(0, 128, 255, .5);
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(238, 196, 196);
    align-items: center;
}
.item {
    flex: 1;
    width: 10%;
    height: 90%;
    transition: all .2s 0s ease-in;
    margin-right: 10px;
    text-align: center;
    border-radius: 30px;
    overflow: hidden;
}
.item:last-child {
    margin-left: 0;
}
.item>img {
    height: 100%;
    width: auto;
}
.show {
    flex: 6;
    box-shadow: 0 0 20px #333;
}
</style>