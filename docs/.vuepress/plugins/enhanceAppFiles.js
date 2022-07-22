import Demo from './demo/Demo.vue';
import Steps from './steps/Steps.vue';
import Step from './steps/Step.vue';
import ElementUI from "element-ui";
import Tabs from 'element-ui/lib/tabs';
import TabPane from 'element-ui/lib/tab-pane';
import 'element-ui/lib/theme-chalk/index.css';

const fixJumpHash = (router) => {
    router.onReady(() => {
        const { hash } = location;
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(`.reco-side-${decodeURIComponent(hash).slice(1)}`);
                el?.click?.();
            }, 500);
        }
    })
}

export default ({Vue, router}) => {
    Vue.use(ElementUI);
    Vue.component(Demo.name, Demo);
    Vue.component(Step.name, Step);
    Vue.component(Steps.name, Steps);
    Vue.component('tabs', Tabs);
    Vue.component('tab', TabPane);
    fixJumpHash(router);
}