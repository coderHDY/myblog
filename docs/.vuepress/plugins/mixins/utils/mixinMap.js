import Vue from 'vue';

// 存储 pathname: callbacks
const callbacksMap = new Map([
    ['/timeline/', 
        [
            () => mountComp(
                {
                    selector: '.timeline-wrapper',
                    src: [
                        'https://webfs.ali.kugou.com/202201271716/a4f7259056ee5089a7b5d223430c6a9d/G209/M08/10/01/sZQEAF7Lqe2AAs8cABnqrdvH08A720.mp3',
                        'https://webfs.ali.kugou.com/202201271716/9b325af19d88a8027f22622de2b5d3dd/G212/M08/17/1B/FA4DAF7Lqe2ASq7LACI1LatoIIw042.mp3',
                    ],
                    comp: 'mymusic',
                },{
                    auto: true,
                }
            ),
            () => modifyTitle('每一个不曾起舞的日子都是对生命的辜负')
        ]
    ],
    ['/tag/', 
        [
            () => mountComp({
                selector: '.theme-container',
                src: 'https://sharefs.ali.kugou.com/202201271618/9d5c4c2490bd4c9a1b5bec149658ea32/G205/M0B/12/0D/bYcBAF509u6AFkBFAEEkaj4GJEQ717.mp3',
                comp: 'mymusic',
            }),
        ]
    ],
]);

// 某些原生页面组件挂载组件
function mountComp({ selector, src, comp }, options = {}) {
    const contener = document.querySelector(selector);
    if (!contener) {
        return;
    }
    const placeholder = document.createElement('div');
    placeholder.id = 'wangyiyun-holder';
    contener.appendChild(placeholder);
    new Vue({
        render: h => h(comp,{
            props:{ src, ...options }
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