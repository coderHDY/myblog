<template>
  <el-container :id="hashId">
    <el-header>
      <div @click="jumpTo">
        <el-steps
          :active="active"
          finish-status="success"
          process-status="finish"
        >
          <el-step v-for="index in this.steps" :key="index"></el-step>
        </el-steps>
      </div>
    </el-header>
    <el-main :class="contentClass">
      <slot :active="active"></slot>
    </el-main>
    <el-footer>
      <el-button
        style="margin-top: 12px"
        type="success"
        @click="prev"
        :disabled="active === 0"
        >上一步</el-button
      >
      <el-button
        style="margin-top: 12px"
        type="success"
        :disabled="active === steps - 1"
        @click="next"
        >下一步</el-button
      >
    </el-footer>
  </el-container>
</template>

<script type="text/babel">
import Container from "element-ui/lib/container";
import Header from "element-ui/lib/header";
import Main from "element-ui/lib/main";
import Footer from "element-ui/lib/footer";
import ElSteps from "element-ui/lib/steps";
import ElStep from "element-ui/lib/step";
export default {
  name: "steps",
  data() {
    return {
      active: 0,
      steps: 0,
    };
  },
  components: {
    "el-container": Container,
    "el-footer": Footer,
    "el-main": Main,
    "el-header": Header,
    "el-steps": ElSteps,
    "el-step": ElStep,
  },
  mounted() {
    const stepContent = document.querySelector(`.${this.contentClass}`);
    this.steps = stepContent.children.length;
  },
  methods: {
    next() {
      if (this.active++ > this.steps - 2) {
        this.active = 0;
      }
      this.backToTop();
    },
    prev() {
      if (this.active-- < 1) {
        this.active = this.steps - 1;
      }
      this.backToTop();
    },
    backToTop() {
      let topBar = document.querySelector(`#${this.hashId}`);
      window.scrollTo({
        top: topBar.offsetTop + 20,
        left: 0,
        behavior: 'instant'
      });
    },
    jumpTo(e) {
      // 四舍五入计算出应该跳转的步数
      const stepLength = e.currentTarget.clientWidth / (this.steps - 1);
      const jump = Math.round(
        (e.x - this.getOffsetBody(e.currentTarget, 'offsetLeft')) / stepLength
      );
      this.active = jump;
    },
    getOffsetBody(el, position) {
      let ans = el[position];
      let parent = el.offsetParent;
      while (parent) {
        ans += parent[position];
        parent = parent.offsetParent;
      }
      return ans;
    },
  },
  computed: {
    // 防止一个页面中出现多个 steps组件，页面跳转的时候判断错误，加一个hashId
    hashId: () => "id_" + Math.floor(Math.random() * 10000),
    contentClass() {
      return "content_" + this.hashId;
    },
  },
};
</script>

<style scoped>
.el-footer {
  display: flex;
  background-color: #dffae9;
  color: #333;
  justify-content: space-between;
  vertical-align: middle;
  padding-bottom: 10px;
}
.el-main {
  background-color: #ecf6ff;
  color: #333;
  line-height: 1.5rem;
  max-width: 100%;
  overflow: hidden;
}
.el-container {
  margin-bottom: 10px;
  padding-top: 20px;
  box-shadow: 0px 0px 2px 0 rgb(0 0 0 / 12%), 0 0px 2px 0 rgb(0 0 0 / 4%);
}
.el-header {
  height: 35px !important;
  margin-top: 60px;
}
</style>