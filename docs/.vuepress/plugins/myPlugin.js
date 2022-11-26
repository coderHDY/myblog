const container = require('markdown-it-container');
const { getAttributes } = require('./util')

// 注册插件语法列表
const components = [
  'step',
  'steps',
  'demo',
  'codePen',
  'el-button',
  'el-slider',
  'tabs',
  'tab'
]

const registerCodePen = (md) => {
  const mark = "codePen";
  md.use(container, mark, {
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const encodedInnerHtml = encodeURIComponent(tokens[idx + 1]?.content);
        const reg = new RegExp(`(?<=${mark}\\s+)(.*)`, "g");
        const rawAttrs = token.info.match(reg);
        return `<${mark} code=${encodedInnerHtml} ${rawAttrs}>\n`;
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
