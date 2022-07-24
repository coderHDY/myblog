<template>
  <div>
    <div
      class="control"
      :class="{ stopStyle: !isPlay }"
      @click="isPlay = !isPlay"
    ></div>
    <audio :src="playingSrc" ref="music" preload></audio>
    <Bubble :x="bubbleX" :y="bubbleY" :speed="100" v-if="showBubble"/>
  </div>
</template>
<script>
import Bubble from '../plugins/bubble/src/Bubble.vue';
export default {
  data() {
    return {
      isPlay: false,
      playingSrc: "",
      playingIdx: 0,
    };
  },
  comments: {
    Bubble
  },
  props: {
    src: {
      type: String | Array
    },
  },
  watch: {
    isPlay(newVal) {
      if (newVal) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
    },
  },
  computed: {
    bubbleX() {
      return window.innerWidth - 36;
    },
    bubbleY() {
      return window.innerHeight - 57;
    },
    showBubble() {
      return this.isPlay;
    },
  },

  mounted() {
    if (typeof this.src === "string") {
      this.playingSrc = this.src;
      this.$refs.music.setAttribute("loop", true);
    } else {
      // 处理数组，随机出歌
      this.playingIdx = Math.floor(Math.random() * this.src.length);
      this.playingSrc = this.src[this.playingIdx];
      this.$refs.music.addEventListener("ended", () => {
        this.next();
      });
      this.$refs.music.addEventListener("error", () => {
        this.next();
      });
    }
  },
  methods: {
    // 等待音乐地址更换，后再开播。
    next() {
      this.isPlay = false;
      let idx = this.playingIdx;
      this.playingIdx = idx < this.src.length - 1 ? idx + 1 : 0;
      this.playingSrc = this.src[this.playingIdx];
      this.$nextTick(() => (this.isPlay = true));
    },
  },
};
</script>

<style scoped>
.control {
  position: fixed;
  right: 4px;
  bottom: 25px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 999;
  animation: rotate 5s 0s linear forwards infinite;
  width: 64px;
  height: 64px;
  background-image: url("/assets/img/musicplay.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(202, 231, 250);
}
div,
a,
img {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
.stopStyle {
  background-image: url("/assets/img/musicstop.svg");
  animation-play-state: paused;
  animation-iteration-count: 0;
  animation-fill-mode: "backwards";
}
</style>