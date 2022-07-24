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
    mounted() {
        if (typeof window === "undefined") return;
        if (!window._bubble) {
            window._bubble = new BubbleEffect();
        }
        this.bubble = window._bubble;
        if (this.x && this.y) {
            this.bubble.fixBubble(this.x, this.y, this.speed, this.timer);
        }
        if (this.random) {
            this.bubble.autoBubble(this.speed, this.timer);
        }
    },
    beforeDestroy() {
        this.bubble?.stopAutoBubble();
        this.bubble?.stopFixBubble();
    }
};
</script>