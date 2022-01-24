<template>
  <iframe :src='src' scrolling="no" border="0" frameborder="no" width="100%" framespacing="0" allowfullscreen="true"> </iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
iframe {
  height: 480px;
}
@media (max-width: 768px) {
  iframe {
    height: 300px
  }
}
@media (max-width: 480px) {
  iframe {
    height: 250px
  }
}
</style>