import Demo from './demo/Demo.vue';
import Steps from './steps/Steps.vue';
import Step from './steps/Step.vue';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

export default ({Vue}) => {
    Vue.use(ElementUI);
    Vue.component(Demo.name, Demo);
    Vue.component(Step.name, Step);
    Vue.component(Steps.name, Steps);
}