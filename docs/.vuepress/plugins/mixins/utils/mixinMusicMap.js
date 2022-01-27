import Vue from 'vue';

// 存储 pathname: callbacks
const callbacksMap = new Map([
    ['/timeline/', 
        [
            () => mountWangyiyun({
                selector: '.timeline-wrapper',
                src: '//music.163.com/outchain/player?type=2&id=1450010399&auto=1&height=66'
            }),
            () => modifyTitle('每一个不曾起舞的日子都是对生命的辜负')
        ]
    ],
]);

// 某些原生页面组件挂载网抑云
function mountWangyiyun({selector, src}) {
    const contener = document.querySelector(selector);
    if (!contener) {
        return;
    }
    const placeholder = document.createElement('div');
    placeholder.id = 'wangyiyun-holder';
    contener.appendChild(placeholder);
    new Vue({
        render: h => h('wangyiyun2',{
            props:{ src }
        }),
    }).$mount('#wangyiyun-holder');
}

function modifyTitle(title) {
    const titleEl = document.querySelector('.timeline-content>li:first-child');
    if (!titleEl || !title) {
        return;
    }
    titleEl.textContent = title;
}

export {
    callbacksMap
}