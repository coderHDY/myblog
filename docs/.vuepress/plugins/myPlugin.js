const container = require('markdown-it-container');
const { getAttributes } = require('./util')

// 注册插件语法列表
const components = [
  'step',
  'steps',
  'demo',
  'el-button',
  'el-slider',
  'tabs',
  'tab'
]

// 注册codePen组件，特殊处理
const registerCodePen = (md) => {
  const mark = "codePen";
  // 替换掉字串的内容 {{val}} -> xxx
  const replaceInnerCode = (item, attrStr) => {
    const attr = attrStr.split(/\s+/).reduce((pre, item) => {
      const [k, v] = item.split("=")
      pre[k] = v;
      return pre;
    }, {});
    const valReg = /{{(.+)}}/g;
    item.content = item.content.replace(valReg, (_, $1) => attr[$1]);
  }

  md.use(container, mark, {
    // validate: function (params) {
    //   return params.trim().match(/^codePen\s*(.*)?$/);
    // },
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const encodedInnerHtml = encodeURIComponent(tokens[idx + 1]?.content);
        const reg3 = new RegExp(`${mark}\\s+(.*)`);
        const rawAttrs = token.info.match(reg3);
        replaceInnerCode(tokens[idx + 1], token.info);
        return `<${mark} code=${encodedInnerHtml} ${rawAttrs && rawAttrs[1]}>\n`;
      } else {
        return `</${mark}>\n`;
      }
    }
  })
}

module.exports = function tabsPlugin(md, options = {}) {
  const registerCtn = mark => {
    md.use(container, mark, {
      render(tokens, idx) {
        const token = tokens[idx];
        let attributes = getAttributes(token.info, mark);
        if (token.nesting === 1) {
          return `<${mark} ${attributes}>\n`;
        } else {
          return `</${mark}>\n`;
        }
      }
    })
  }
  components.forEach(mark => registerCtn(mark));
  registerCodePen(md);
};
