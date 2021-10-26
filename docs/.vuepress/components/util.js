// 获取markdown扩展语法的属性
const getAttributes = (info, mark) => {
    let attribute = info.trim().slice(mark.length).trim();
    return addAttributes(attribute, mark);
}

function addAttributes(attributes, mark) {

    /**
     * 各组件除了markdown写入的属性以外，需要固定传入的属性
     * 记得前面加空格分割
     */
    switch (mark) {
        case 'demo': {
            attributes += ' name="百度搜索产品运营小组"';
            break;
        }
        case 'steps': {
            attributes += ' v-slot="{ active }"';
            break;
        }
        case 'step': {
            attributes += ' :active="active"';
            break;
        }
    }

    return attributes;
}

module.exports = {
    getAttributes
}