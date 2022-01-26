<template>
  <div class="box" id='wangyiyun'>
    <div :style="hdBtn" @click="isShrink = !isShrink"></div>
    <iframe
      :class="{ shrink: isShrink }"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      :src="src"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShrink: false,
    };
  },
  props: {
    src: {
      type: String,
      default: "//music.163.com/outchain/player?type=2&id=1300595161&auto=0&height=66",
    },
  },
  computed: {
    hdBtn() {
      return {
        backgroundImage: `url(${
          this.isShrink ? "/assets/img/left.png" : "/assets/img/right.png"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "86px",
        width: "15px",
        paddingLeft: "5px",
      };
    },
  },
};
</script>

<style scoped>
.box {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  background: linear-gradient(to right, rgb(235, 248, 230) 0%, #85eeee 100%);
  z-index: 999;
}
iframe {
  transition: all 500ms 0s ease-in-out;
  height: 86px;
  width: 310px;
}
.shrink {
  width: 0;
}
</style>