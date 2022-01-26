// 存储 pathname: { 页面内独有的的selector, 音乐src }
const mixinMap = new Map([
    ['/timeline/', {
        selector: '.timeline-wrapper',
        src: '//music.163.com/outchain/player?type=2&id=1450010399&auto=1&height=66'
    }],
]);

export {
    mixinMap
}