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
                },
                {
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
                src: [
                    'https://sharefs.ali.kugou.com/202201271618/9d5c4c2490bd4c9a1b5bec149658ea32/G205/M0B/12/0D/bYcBAF509u6AFkBFAEEkaj4GJEQ717.mp3',
                    'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct27%2F2018%2F12%2F27%2F2015%E5%B9%B41%E6%9C%8823%E6%97%A5%E7%B4%A7%E6%80%A5%E5%87%86%E5%85%A5%E5%BF%97%E8%88%AA%E9%A2%84%E7%95%998%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F69539200025.mp3?Key=3a2b8912bd8c8541&Tim=1643280510725&channelid=01&msisdn=938d7b91f5144235a4ab4a9901487275',
                ],
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
        render: h => h(comp, {
            props: { src, ...options }
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