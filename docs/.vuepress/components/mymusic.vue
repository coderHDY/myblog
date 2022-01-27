<template>
  <div id="musicFlag">
    <div 
        class="control"
        :class="{ stopStyle: !isPlay }"
        @click="isPlay = !isPlay"
    >
    </div>
    <audio :src="playingSrc" ref="music" preload></audio>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isPlay: false,
            playingSrc: '',
            playingIdx: 0
        }
    },
  props: {
    src: {
      type: String | Array,
      default:
        "https://sharefs.ali.kugou.com/202201271618/9d5c4c2490bd4c9a1b5bec149658ea32/G205/M0B/12/0D/bYcBAF509u6AFkBFAEEkaj4GJEQ717.mp3",
    },
    auto: {
        type: Boolean,
        default: false
    }
  },
  watch: {
      isPlay(newVal) {
          if (newVal) {
              this.$refs.music.play();
          } else {
              this.$refs.music.pause();
          }
      }
  },
  mounted() {
      if (typeof this.src === 'string') {
          this.playingSrc = this.src;
          this.$refs.music.setAttribute('loop', true);
      } else {
          // 处理数组，随机出歌
          this.playingIdx = Math.floor(Math.random() * this.src.length);
          this.playingSrc = this.src[this.playingIdx];
          this.$refs.music.addEventListener('ended' ,() => {
              this.next();
          })
          this.$refs.music.addEventListener('error' ,() => {
              this.next();
          })
      }

      // 本次事件轮询歌曲url还没加上，下个事件轮询开始播放
      if (this.auto) {
          this.$nextTick(() => {
            this.isPlay = true;
          })
      }
  },
  methods: {
      next() {
        this.isPlay = false;
        let idx = this.playingIdx;
        this.playingIdx = idx < this.src.length - 1 ? idx + 1 : 0;
        this.playingSrc = this.src[this.playingIdx];
        this.$nextTick(() => this.isPlay = true);
      }
  }
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
    background-image: url('/assets/img/musicplay.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(202, 231, 250);
}
.stopStyle {
    background-image: url("/assets/img/musicstop.svg");
    animation-play-state: paused;
    animation-iteration-count: 0;
    animation-fill-mode:  'backwards';
}
</style>