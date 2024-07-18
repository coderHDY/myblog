const { path } = require('@vuepress/shared-utils')

module.exports = options => ({
    name: 'artillery',
    enhanceAppFiles() {
        return [path.resolve(__dirname, 'src/enhanceAppFile.js')]
    },
    globalUIComponents: ['Artillery']
})