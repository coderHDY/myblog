// 各组件除了markdown写入的属性以外，需要固定传入的属性
const FIXED_ATTR = new Map([
    ['demo', 'name="百度搜索产品运营小组"'],
    ['steps', 'v-slot="{ active }"'],
    ['step', ':active="active"'],
    ['tabs', 'type=border-card']
])

// 获取markdown扩展语法的属性
const getAttributes = (info, mark) => {
    let attribute = info.trim().slice(mark.length).trim();
    return addAttributes(attribute, mark);
}

function addAttributes(attributes, mark) {
    return FIXED_ATTR.has(mark) ? attributes += ' ' + FIXED_ATTR.get(mark) : attributes;
}

module.exports = {
    getAttributes
}