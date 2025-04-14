(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1001:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/git/git/releases/tag/v2.17.2",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多安装版本"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/git/git/archive/refs/tags/v2.33.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf v2.33.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git-2.33.0\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autoconf automake libtool\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" configure\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /root/git\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/git\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib-devel\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bash_profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~/.bash_profile 配置环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/git/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/git/libexec:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/git/share:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo寻找命令：/sbin:/bin: /usr/sbin: /usr/bin")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有sudo权限可以开软链 fromOldLink toNewLink")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /root/lib/git/bin/git /usr/bin/git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"免密pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密pull"}},[s._v("#")]),s._v(" 免密pull")]),s._v(" "),a("tabs",{attrs:{type:"border-card"}},[a("tab",{attrs:{label:"ssh"}},[a("ol",[a("li",[s._v("配置global 仓库user信息")]),s._v(" "),a("li",[s._v("设置ssh-key")]),s._v(" "),a("li",[s._v("clone仓库")]),s._v(" "),a("li",[s._v("后续就可以免密pull")])])]),s._v(" "),a("tab",{attrs:{label:"http"}},[a("ol",[a("li",[s._v("获取仓库的http连接")]),s._v(" "),a("li",[s._v("做链接拼接上自己的信息")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone http://huangdeyu:TNPU4Uxp3JWsJPYvKmBr@gitlab.baidu.com/huangdeyu/yunying-docs.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("后续也可以免密pull")])])])],1),s._v(" "),a("h2",{attrs:{id:"服务器git免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器git免密登录"}},[s._v("#")]),s._v(" 服务器git免密登录")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/243",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何部署博客到服务器"),a("OutboundLink")],1)])]),s._v(" "),a("steps",{scopedSlots:s._u([{key:"default",fn:function(t){var n=t.active;return[a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("服务器创建本地仓库"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一个名为 git 的用户")]),s._v("\nadduser "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 git 用户的密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提权")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" visudo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在文件里写入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存提出，然后切换到 git 用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])])]),s._v(" "),a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("本地使用git身份登录服务器"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -v git@10.14.xxx.xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入密码")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])])]),s._v(" "),a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("服务器创建免密登录（公私钥）"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入用户主目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 .ssh 目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 authorized_keys 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[s._v("在本地起一个终端，获取本地公钥"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("关联"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登陆服务器，将获取的公钥写入服务器的 authorized_keys")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这里修改为你的公钥内容"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.ssh/authorized_keys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给相关文件添加执行权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])]),s._v(" "),a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("完成远程免密登录"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -v git@10.14.xxx.xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])])]}}])}),s._v(" "),a("h2",{attrs:{id:"服务器git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器git仓库"}},[s._v("#")]),s._v(" 服务器git仓库")]),s._v(" "),a("steps",{scopedSlots:s._u([{key:"default",fn:function(t){var n=t.active;return[a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("生成git仓库："),a("code",[s._v("git@10.14.233.17:/home/www/website/blog.git")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入代码仓库目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/www/website\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予 git 用户权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" git:git /home/www/website\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建代码目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" blog.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入代码目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("git init --bare")]),s._v(" 初始化仓库只包括版本控制文件")])])]),s._v(" "),a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("借助一个 hooks，在有代码提交到该仓库的时候，将提交的代码迁移到其他目录"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hooks\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并编辑 post-receive 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" post-receive\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是 post-receive 写入的内容")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --work-tree"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/www/website/blog checkout -f\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予执行权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x post-receive\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出目录到 blog.git 同级目录并创建文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" blog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])])]),s._v(" "),a("step",{attrs:{active:n}},[a("ul",[a("li",[s._v("推到远程仓库"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@10.14.233.17:/home/www/website/blog.git master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("可以把上传文件存放到"),a("code",[s._v("deploy.sh")]),s._v("文件")])])])]}}])})],1)}),[],!1,null,null,null);t.default=e.exports}}]);