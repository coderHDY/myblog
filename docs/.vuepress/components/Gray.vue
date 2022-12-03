<template>
  <div class="gray">你好</div>
</template>
<script>
export default {
  data() {
    return {
      grayStyle: `
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        -webkit-filter: gray;
        -webkit-filter:
        progid:dximagetransform.microsoft.basicimage(grayscale=1);
        filter: progid:dximagetransform.microsoft.basicimage(grayscale=1);
        filter: grayscale(100%);
        filter: gray;
      `,
    };
  },
  mounted() {
    document.body.setAttribute("style", this.grayStyle);
  },
  beforeDestroy() {
    // document.body.removeAttribute("style");
  },
};
</script>

<style scoped>
</style>