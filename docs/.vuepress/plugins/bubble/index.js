const { path } = require('@vuepress/shared-utils')

module.exports = options => ({
    name: 'bubble',
    enhanceAppFiles() {
        return [path.resolve(__dirname, 'src/enhanceAppFile.js')]
    },
    globalUIComponents: ['Bubble']
})