// 插件的入口
import { modifyRawPage } from './utils/mountComp';

// 客户端生命周期做的事: clientRootMixin
export default {
    created() { },
    mounted() { },
    beforeRouteEnter(to, from, next) {
        next(modifyRawPage);

        // 关闭气泡，待优化写法
        if (!global) {
            window._bubble?.stopFixBubble();
        }
    },
}