<template>
    <div v-if="innerWidth > 720" class="window-wrapper" :class="!big && 'small'">
        <div class="window-outer" :class="hidden && 'hidden'">
            <div class="window-inner"></div>
            <div class="controller" @click="toggle">亖</div>
        </div>
        <div class="window-content">
            <img src="https://coderhdy.com/assets/img/bg.svg" @click="(e) => e.stopPropagation()"/>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      hidden: false,
      innerWidth: 1000
    }
  },
  props: {
    big: {
        type: Boolean,
        default: false
    },
  },
  methods: {
    toggle() {
        this.hidden = !this.hidden;
    },
    resize() {
        this.innerWidth = window.innerWidth;
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
      window.removeEventListener("resize", this.resize);
  }
}
</script>

<style scoped>
.window-wrapper {
    position: absolute;
    left: 0;
    top: -80px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba(37, 37, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 2rem;
    border: 1px solid #333;
    box-sizing: border-box;
    z-index: -1;
    overflow: hidden;
}
.small {
    position: absolute;
    right: 10px;
    top: 60px;
    width: 30vh;
    height: 30vh;
}
.small img {
    position: absolute;
    width: 200% !important;
    height: 200% !important;
    max-width: 200% !important;
    max-height: 200% !important;
    top: -26%;
    z-index: 0;
}
.small .hidden {
    height: 2rem;
}
.window-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2rem rgb(255, 255, 255) solid;
    border-top: 0;
    border-bottom: 0;
    transition: all 1s 0s ease;
    border-radius: 2rem;
    z-index: 1;
    box-sizing: border-box;
    overflow: hidden;
}
.window-inner {
    position: relative;
    background-color: #fff;
    height: calc(99vh - 2rem);
    border: 1px solid rgb(175, 175, 175);
    box-sizing: border-box;

}
.controller {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 3rem;
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 500;
    bottom: 0;
    background-color: rgb(238, 238, 238);
    z-index: 1000;
}
.controller:hover {
    cursor: var(--cursor-link);
}
.hidden {
    height: calc(60px + 2rem);
}
.window-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    overflow: hidden;
}
.window-content img {
    width: 100%;
    height: 100%;
    cursor: var(--cursor-default);
}
</style>