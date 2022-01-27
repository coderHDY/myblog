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
                        'https://sharefs.ali.kugou.com/202201272316/87f2806ae2720de118df6917f092e2ba/G149/M07/0F/19/NYcBAFxmR6WASpv1ABlBenJuBFQ145.mp3',
                        'https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct41%2F2020%2F08%2F1821%2F2020%E5%B9%B408%E6%9C%8818%E6%97%A512%E7%82%B945%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%92%8C%E8%A3%95%E7%BD%91%E7%BB%9C1%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F69535601315214542.mp3?Key=c44b1ee5ae81a426&Tim=1643295977444&channelid=01&msisdn=f51cea5e8ede43d282e752b667b0076f',
                        'https://sharefs.ali.kugou.com/202201272307/ae0085721eb7ab8e38dbc3b430a4b6c6/KGTX/CLTX001/6000bd7a8922f02e3b80638ce594f418.mp3',
                        'https://sharefs.ali.kugou.com/202201272307/ae0085721eb7ab8e38dbc3b430a4b6c6/KGTX/CLTX001/6000bd7a8922f02e3b80638ce594f418.mp3',
                        '/assets/music/qifengle.mp3',
                        'https://sharefs.ali.kugou.com/202201272020/abacd85437e258e4892159d5dbed7f48/G245/M01/07/05/1ZQEAF-lLFiALOS9ACULHdvLjXE114.mp3',
                        'https://sharefs.ali.kugou.com/202201272014/97913051ea7717a6bf2169e9a1494ae2/KGTX/CLTX001/adb0b17be96265a940c19902404fb7d8.mp3',
                        'https://freetyst.nf.migu.cn/public%2Fringmaker01%2Fn16%2F2016%2F11%2F2013%E5%B9%B404%E6%9C%8816%E6%97%A5%E7%8B%AC%E7%AB%8B%E9%9F%B3%E4%B9%90%E4%BA%BA%E5%BC%95%E5%85%A5%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A52%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F%E8%80%81%E8%A1%97-%E6%9D%8E%E8%8D%A3%E6%B5%A9.mp3?Key=f17e3de98ff177ed&Tim=1643296347833&channelid=01&msisdn=3b0a2d3ed06f4e9e821fa22c83e64aa5',
                        'https://sharefs.ali.kugou.com/202201272314/b71cc0534907bec966d89291997994d4/KGTX/CLTX001/52003ddb5b251e2f8a19eaf43e1ce3e1.mp3'
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
    const container = document.querySelector(selector);
    if (!container) {
        return;
    }
    const placeholder = document.createElement('div');
    placeholder.id = 'wangyiyun-holder';
    container.appendChild(placeholder);
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