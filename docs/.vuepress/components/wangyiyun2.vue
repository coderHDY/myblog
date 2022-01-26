<template>
  <div>
    <div class="content-box">
      <div class="music-box">
        <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="330"
          height="86"
          :src="src"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default:
        "//music.163.com/outchain/player?type=2&id=1450010399&auto=1&height=66",
    },
  },
};
</script>

<style scoped>
.content-box {
  position: fixed;
  right: 10px;
  bottom: 160px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 999;
  animation: rotate 5s 0s linear forwards infinite;
}
.music-box {
  position: absolute;
  height: 100%;
  width: 100%;
  left: -11px;
  top: -11px;
}

@keyframes rotate {
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>