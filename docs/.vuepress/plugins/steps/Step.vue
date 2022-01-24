<template>
  <div>
    <div v-show="active === this.id">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "step",   // 必须项，enhanceAppFiles.js 注册全局组件用
  data() {
    return {
      id: {
        type: Number,
        default: 0
      }
    };
  },
  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.id = this.$parent.$children.findIndex((item) => item === this);
  },
};
</script>

<style scoped>
</style>