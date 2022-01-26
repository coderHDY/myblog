import Vue from 'vue';
import { mixinMap } from './mixinMusicMap';


// 某些原生页面组件挂载网抑云
function mountWangyiyun() {
    const pathname = location.pathname;
    if (!mixinMap.has(pathname)) {
        return;
    }
    const  { src, selector } = mixinMap.get(pathname) || {};

    const contener = document.querySelector(selector);
    if (!contener) {
        return;
    }
    const placeholder = document.createElement('div');
    placeholder.id = 'wangyiyun-holder';
    contener.appendChild(placeholder);
    new Vue({
        render: (h) => h('wangyiyun2',{
            style: 'margin-top: 60px;',
            props:{ src }
        }),
    }).$mount('#wangyiyun-holder');
}

export {
    mountWangyiyun,
}