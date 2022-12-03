<template>
  <div class="gray">你好</div>
</template>
<script>
export default {
  data() {
    return {
      grayClass: "gray",
    };
  },
  mounted() {
    document.documentElement.classList.add(this.grayClass);
  },
  beforeDestroy() {
    // document.body.classList.remove(this.grayClass);
  },
};
</script>

<style scoped>
</style>