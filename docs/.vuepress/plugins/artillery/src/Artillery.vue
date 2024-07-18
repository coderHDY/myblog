<template></template>

<script>
import Artillery from "./artillery";
export default {
  data() {
    return {
      artillery: null,
    };
  },
  methods: {
    init() {
      if (typeof window === "undefined") return;
      if (!window._artillery) window._artillery = new Artillery();
      this.artillery = window._artillery;
    },
    clear() {
      if (this.artillery) {
        this.artillery.clear();
        this.artillery = null;
      }
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.clear();
  },
};
</script>
