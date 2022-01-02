// 插件的入口
import bubbles from './bubble/bubble.js';

// 客户端生命周期做的事: clientRootMixin
export default {
    create() {},
    mounted() {
        new bubbles();
    }
}