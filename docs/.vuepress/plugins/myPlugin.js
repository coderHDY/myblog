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
        return `<${mark} code=${encodedInnerHtml} ${rawAttrs[1]}>\n`;
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
