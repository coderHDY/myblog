(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{996:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"工具介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[s._v("#")]),s._v(" 工具介绍")]),s._v(" "),n("ul",[n("li",[s._v("可后台运行进程，类似于nohup，但比nohup好用")]),s._v(" "),n("li",[s._v("如果进程意外挂掉，pm2会自己重启它，保证进程的持续性")]),s._v(" "),n("li",[s._v("可以设置开机启动，让后台脚本持续运行")]),s._v(" "),n("li",[s._v("适合用来保护服务器进程不挂掉")])]),s._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn方式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" pm2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://raw.githubusercontent.com/Unitech/pm2/master/packager/setup.deb.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"启动服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再对应目录下执行")]),s._v("\npm2 start app.js\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给进程起名字")]),s._v("\npm2 start app.js --name myName \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台运行脚本")]),s._v("\npm2 start deploy.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开静态资源服务器")]),s._v("\npm2 serve ./dist "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dev模式持续后台开启，且监听")]),s._v("\npm2 start "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" --watch  -- run dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"保护进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保护进程"}},[s._v("#")]),s._v(" 保护进程")]),s._v(" "),n("ul",[n("li",[s._v("进程有可能中途挂掉，或者直接 kill -9 22222 直接强制关掉")]),s._v(" "),n("li",[s._v("这种情况，普通的方式启动服务就挂掉了")])]),s._v(" "),n("tabs",{attrs:{type:"border-card"}},[n("tab",{attrs:{label:"普通方式"}},[n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy.sh里面有 npm run dev")]),s._v("\npm2 start deploy.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 寻找8080端口的进程号：2222")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8080\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭进程号")]),s._v("\nkill-9 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志，发现无法恢复")]),s._v("\npm2 logs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])]),s._v(" "),n("tab",{attrs:{label:"监听方式"}},[n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听方式启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy.sh里面有 npm run dev")]),s._v("\npm2 start deploy.sh --watch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 寻找8080端口号对应的进程：2222")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8080\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程日志")]),s._v("\npm2 logs\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现进程挂了还重启了")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])]),s._v(" "),n("tab",{attrs:{label:"总结对比"}},[n("ul",[n("li",[s._v("--watch方式\n"),n("ol",[n("li",[s._v("进程意外挂掉可以复活")]),s._v(" "),n("li",[s._v("vuepress启动热更新会监听页面的增删")]),s._v(" "),n("li",[s._v("缺点：任何改动都会重启热更新，更新速度较慢，10s左右")]),s._v(" "),n("li",[s._v("缺点：页面有改动需要手动刷新页面，不会热更新")])])]),s._v(" "),n("li",[s._v("普通方式\n"),n("ol",[n("li",[s._v("进程挂掉不会复活")]),s._v(" "),n("li",[s._v("vuepress启动热更新，页面增删不会监听到")]),s._v(" "),n("li",[s._v("优点：直接改动页面可以实时更新")])])])])])],1),s._v(" "),n("h3",{attrs:{id:"管理进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#管理进程"}},[s._v("#")]),s._v(" 管理进程")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程产生的日志")]),s._v("\npm2 logs\npm2 log "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有的服务")]),s._v("\npm2 list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看程序占用情况")]),s._v("\npm2 monit\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程改名")]),s._v("\npm2 restart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" --name blog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"关闭服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭服务"}},[s._v("#")]),s._v(" 关闭服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pm2 stop all\n\npm2 stop "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n\npm2 stop name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"删除服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除服务"}},[s._v("#")]),s._v(" 删除服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pm2 delete all\n\npm2 delete "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n\npm2 delete name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"开机自动启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开机自动启动"}},[s._v("#")]),s._v(" 开机自动启动")]),s._v(" "),n("ul",[n("li",[s._v("windows系统")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用pm2启动node")]),s._v("\npm2 start /home/wwwroot/web.js --watch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认执行的任务列表")]),s._v("\npm2 list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存这些进程列表")]),s._v("\npm2 save\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成自启动脚本")]),s._v("\npm2 startup \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制生成的脚本，再执行一次")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("linux(如果上面没有达到效果的话)")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接着上面的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机服务")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" pm2-root\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"问题解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[s._v("#")]),s._v(" 问题解决")]),s._v(" "),n("ul",[n("li",[s._v("一开程序就stopped")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应该是换了node版本，原版本开的程序就出问题了")]),s._v("\npm2 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v("\npm2 start "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"其他命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),n("ul",[n("li",[s._v("重启服务："),n("RouterLink",{attrs:{to:"/skill/linux/pm2.html#启动服务"}},[s._v("启动服务")]),s._v(" 的 start 改为 restart")],1),s._v(" "),n("li",[s._v("重新加载："),n("RouterLink",{attrs:{to:"/skill/linux/pm2.html#启动服务"}},[s._v("启动服务")]),s._v(" 的 start 改为 reload")],1),s._v(" "),n("li",[s._v("监听模式")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pm2 start app.js --watch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("更新pm2")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pm2 update\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("显示进程的所有信息")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pm2 show "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n\npm2 show name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"附录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),n("h3",{attrs:{id:"nohup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[s._v("#")]),s._v(" nohup")]),s._v(" "),n("ul",[n("li",[s._v("后台执行程序，不关机就不会停，适合再linux上运行重复脚本")])]),s._v(" "),n("blockquote",[n("p",[s._v("缺点：少部分情况会挂掉，且不好监控运行情况，pm2更优")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# & 代表后台持续运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" deploy.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=e.exports}}]);