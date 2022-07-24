<template></template>

<script>
import BubbleEffect from './bubbleEffect';
export default {
    data() {
        return {
            bubble: null,
            fixInterval: null,
            randomInterval: null,
        }
    },
    props: {
        x: Number,
        y: Number,
        random: Boolean,
        speed: [Number, null],
        timer: [Number, null],
    },
    methods: {
        init() {
            if (typeof window === "undefined") return;
            if (!window._bubble) window._bubble = new BubbleEffect();
            this.bubble = window._bubble;
            if (this.x && this.y) this.bubble.fixBubble(this.x, this.y, this.speed, this.timer);
            if (this.random) this.bubble.autoBubble(this.speed, this.timer);
        },
        clear() {
            this.bubble?.stopAutoBubble();
            this.bubble?.stopFixBubble();
        },
        visibilityListener() {
            if (document.visibilityState === 'hidden') this.clear();
            // 用户打开或回到页面
            if (document.visibilityState === 'visible') this.init();
        }
    },
    mounted() {
        this.init();
        document.addEventListener('visibilitychange', this.visibilityListener);
    },
    beforeDestroy() {
        this.clear();
        document.removeEventListener('visibilitychange', this.visibilityListener);
    }
};
</script>