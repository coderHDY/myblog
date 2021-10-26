<template>
  <div>
    <div v-show="active === this.key">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "step",   // 必须项，enhanceAppFiles.js 注册全局组件用
  props: {
    id: {
        type: String,
        default: "0"
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  computed: {
      key() {
          return parseInt(this.id);
      }
  }
};
</script>

<style scoped>
</style>