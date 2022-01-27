// 插件的入口
import bubbles from './bubble/bubble.js';
import { modifyRawPage } from './utils/mountComp';

// 客户端生命周期做的事: clientRootMixin
export default {
    created() {},
    mounted() {
        new bubbles();
    },
    beforeRouteEnter(to, from, next) {
        next(modifyRawPage);
    },
}