const container = require('markdown-it-container');
const { getAttributes } = require('./util')

// 注册插件语法列表
const components = [
  'step',
  'steps',
  'el-tabs',
  'el-tab-pane',
  'demo',
  'el-button',
  'el-slider'
]

module.exports = function tabsPlugin(md, options = {}) {
  options = options || {};

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
  components.forEach(mark => registerCtn(mark))
};
