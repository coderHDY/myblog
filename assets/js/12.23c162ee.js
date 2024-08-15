(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{786:function(s,t,a){s.exports=a.p+"assets/img/stash.bb16a21d.png"},787:function(s,t,a){s.exports=a.p+"assets/img/soft.0a1887e2.png"},788:function(s,t,a){s.exports=a.p+"assets/img/mixed.030485c2.png"},789:function(s,t,a){s.exports=a.p+"assets/img/hard.b81ae310.png"},790:function(s,t,a){s.exports=a.p+"assets/img/revert.903a6cc0.png"},791:function(s,t,a){s.exports=a.p+"assets/img/rebase.b146b14f.png"},792:function(s,t,a){s.exports=a.p+"assets/img/forkwenti.ae5810de.png"},793:function(s,t,a){s.exports=a.p+"assets/img/pullrequest.2c1df609.png"},988:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"git-branch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[s._v("#")]),s._v(" git branch")]),s._v(" "),n("ul",[n("li",[s._v("查看、创建"),n("code",[s._v("分支")])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("分支")]),n("p",[s._v("一个项目开发周期可能很长，那么不可能所有人在一个地方更改代码，所以有了分支这个概念，就是开发大型项目的基础，每个分支可以"),n("strong",[s._v("同时")]),s._v("处理不同的业务，然后一起合并到 master 分支上去。能够实现同步开发多个功能。")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看远程分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地分支和远程分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新 dev 分支，但HEAD还是留在本分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新分支并切换")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分支重命名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m oldName newName\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看树形分支历史")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show-branch\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("如果想要删除的分支有commit未合并到当前分支，那么会报错，因为你尝试删除一个可能有一定贡献的分支，解决方式：")])]),s._v(" "),n("ol",[n("li",[s._v("merge留存该分支的贡献，再删除")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("如果确定直接删除：")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"git-merge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[s._v("#")]),s._v(" git merge")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("冲突")]),n("ul",[n("li",[s._v("a是b拉出来的一个分支，也就是说a是基于b分支在进行开发，a的commit不影响到b。")]),s._v(" "),n("li",[s._v("b分支自己也在开发，b的commit也不影响到a")]),s._v(" "),n("li",[s._v("有一天a分支的任务完成了，需要融入回b分支，就要用到 git merge")]),s._v(" "),n("li",[s._v("可是有一个文件的一个位置，a分支也commit了修改，b分支也commit了修改，那么这次合并应该以谁的版本为准呢？")]),s._v(" "),n("li",[s._v("这就产生了"),n("code",[s._v("冲突")])])])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把dev分支合并到本分支来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"git-checkout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[s._v("#")]),s._v(" git checkout")]),s._v(" "),n("ul",[n("li",[s._v("切换分支")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并切换")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放弃当前所做的更改（未放进缓存区的）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"git-tag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[s._v("#")]),s._v(" git tag")]),s._v(" "),n("ul",[n("li",[s._v("给一个重要的commit版本打上tag标识，更好地认出找出该版本如：V1.0"),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出已有tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -l\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前版本打标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.0\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.1 -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my version 1.4"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定版本打标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.2 9fceb02\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v1.0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])]),s._v(" "),n("li",[s._v("推送："),n("code",[s._v("git push")]),s._v("默认"),n("strong",[s._v("不会")]),s._v("推送tag信息"),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\n\n// 推送所有\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin –-tags\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"git-stash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[s._v("#")]),s._v(" git stash")]),s._v(" "),n("ul",[n("li",[s._v("缓存修改")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("缓存区")]),n("ul",[n("li",[s._v("我在开发A功能，B功能突然出现BUG了")]),s._v(" "),n("li",[s._v("我不可能把没有开发完的A功能提交了吧，所以需要一个分支")]),s._v(" "),n("li",[s._v("那么问题来了，我去分支了，当前A功能开发到一半的代码怎么办？(编码区和暂存区)")]),s._v(" "),n("li",[s._v("如果我直接切，会有报错")]),s._v(" "),n("li",[s._v("这就需要把他"),n("strong",[s._v("缓存")]),s._v("起来，等以后再拿出来\n"),n("img",{attrs:{src:a(786),alt:"stash"}})])])]),n("ul",[n("li",[s._v("常用指令")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前暂存区和编码区推入缓存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取出上个缓存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看缓存列表及编号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空缓存列表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("一些不常用的高级用法")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推入缓存并取个名字")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A修改暂存'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看编号1的缓存修改的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看编号1的缓存的详细修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show -p stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回复到指定缓存，(不删除)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定缓存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"git-reset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[s._v("#")]),s._v(" git reset")]),s._v(" "),n("ul",[n("li",[s._v("git reset 有三个方式")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("--soft")]),n("ul",[n("li",[s._v("HEAD指针指向指定的版本\n"),n("img",{attrs:{src:a(787),alt:""}})])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("--mixed")]),n("ul",[n("li",[s._v("HEAD指针和暂存库指向指定的版本")])]),s._v(" "),n("blockquote",[n("p",[s._v("注：暂存库会丢失")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(788),alt:""}})])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("--hard")]),n("ul",[n("li",[s._v("HEAD指针和暂存库和编写代码区全部指向指定版本")]),s._v(" "),n("li",[s._v("且目标版本之后的版本都不要了")])]),s._v(" "),n("blockquote",[n("p",[s._v("注：暂存库和编写库和后面的版本历史会丢失"),n("br"),s._v("\n本例中，AAA版本会丢失")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(789),alt:""}})])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除编码区修改(所有区指向当前版本库版本)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退一个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退两个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^^\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退三个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD~3\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到指定版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft db3e38b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("推送的版本比远程仓库旧，会提示错误")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到某一个版本且删除放弃后面的版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard db3e38b\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制推送到远程仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"git-revert"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[s._v("#")]),s._v(" git revert")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("错误的历史版本")]),n("p",[s._v("情况：某一个历史版本的修改有问题，但是后面的其他提交修改都没有问题")]),s._v(" "),n("blockquote",[n("p",[s._v("解决方法1：把那次提交包括后面的版本都重新写一遍吧 ?___?"),n("br"),s._v("\n解决办法2：把那个版本的错误的地方写对它再提交一个版本（那错误的地方很多呢） -___-"),n("br"),s._v("\n解决办法3：revert掉那一个版本，利用vscode的对比便捷，写出一个正确的版本再提交^___^")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(790),alt:"revert"}})])]),n("ul",[n("li",[s._v("原理：把那次提交的地方抽取出来，取反，做成一个新的版本，并且已经放入暂存区")])]),s._v(" "),n("blockquote",[n("p",[s._v("注：不会删掉错误版本，只是提取错误版本的修改")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert -n 150c676\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'revert掉了历史的错误提交'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"git-rebase"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[s._v("#")]),s._v(" git rebase")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("变基")]),n("ul",[n("li",[s._v("小A开发到一半，派生出了小B分支")]),s._v(" "),n("li",[s._v("小B开发的同时，小A也在开发")]),s._v(" "),n("li",[s._v("小B总是想基于小A最新的东西开发，就需要"),n("code",[s._v("变基")]),s._v(" "),n("img",{attrs:{src:a(791),alt:"变基"}})])])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果在master分支，将最新的 master 放到 dev 所有 commit 版本的前面，并且切到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase master dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果已经在 dev 分支了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将远程代码库的放在本地的所有 commit 的前面")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("冲突")]),n("ul",[n("li",[s._v("小A 和 小B 的历史版本中改了同一个位置")]),s._v(" "),n("li",[s._v("那么合并过程中应该以谁的版本为准呢？这就是"),n("code",[s._v("冲突")])]),s._v(" "),n("li",[s._v('虽然把小A 的最新版本放到了小B的"基准"上，按理来说就是小B基于小A改了，那么以小B的为准？')]),s._v(" "),n("li",[s._v("但是小B的历史版本已经记录在案，没有办法更改了，所以你只能重新做一个冲突修复的版本放到最前面。")]),s._v(" "),n("li",[s._v("这就是"),n("strong",[s._v("解决冲突")])])])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发起变基")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase master dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现冲突，显示冲突文件 -> 手动解决冲突，决定留哪个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 决定好了放到暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 继续变基")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 如果还有冲突版本会继续要求手动修复，直至没有冲突，生成最新变基版本。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"更新fork仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新fork仓库"}},[s._v("#")]),s._v(" 更新fork仓库")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("ul",[n("li",[s._v("小A有一个远程仓库，小B很喜欢，fork了过来")]),s._v(" "),n("li",[s._v("小B本地仓库关联的自己fork过来的远程仓库")]),s._v(" "),n("li",[s._v("过了一段时间，发现小A仓库更新了，小B怎么最快地更新呢?\n"),n("img",{attrs:{src:a(792),alt:""}})])])]),n("ul",[n("li",[s._v("方案1.增加小A远程仓库（如果有权限clone小A的仓库的话）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream xxx.xiaoA.com\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取最新的小A代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull upstream master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推给自己的仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("方案2.暴力更新")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除自己的远程仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新fork仓库")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"code-review"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-review"}},[s._v("#")]),s._v(" code review")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("code review")]),n("ul",[n("li",[s._v("小A开发了一个软件，所有人都在用")]),s._v(" "),n("li",[s._v("小B用的过程中发现了一个BUG")]),s._v(" "),n("li",[s._v("小B想让小A修改错误：")]),s._v(" "),n("li",[s._v("于是小B把小A的源代码"),n("strong",[s._v("fork")]),s._v("到自己的仓库，并且自己做了BUG修复")]),s._v(" "),n("li",[s._v("小B再给小A发起pull request/merge request 申请合入小A的代码库，让大家都用正确的代码\n"),n("img",{attrs:{src:a(793),alt:"pull request"}})])])]),n("h2",{attrs:{id:"命令设置别名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令设置别名"}},[s._v("#")]),s._v(" 命令设置别名")]),s._v(" "),n("ul",[n("li",[s._v("可以给一个很长的命令设置别名")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.show-graph "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log --graph --abbrev-commit --pretty=oneline'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"gitconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitconfig"}},[s._v("#")]),s._v(" .gitconfig")]),s._v(" "),n("ul",[n("li",[s._v("查找当前目录的git环境配置来源")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list --show-origin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"gitignore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[s._v("#")]),s._v(" .gitignore")]),s._v(" "),n("ul",[n("li",[s._v("git提交时忽略文件")]),s._v(" "),n("li",[s._v("可以识别正则表达式")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略一整个目录")]),s._v("\nnode_modules/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略某一类文件")]),s._v("\n*.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模式取反(某个子目录这个文件不想被忽略)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("*.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"删除git历史文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除git历史文件"}},[s._v("#")]),s._v(" 删除git历史文件")]),s._v(" "),n("ul",[n("li",[s._v("查出最大的几个文件")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" verify-pack -v .git/objects/pack/*.idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -3\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大三个：tail -3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("查看文件路径")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hash码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --objects --all "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git rev-list --objects --all | grep b1bf4cf155117e9950aeb2d04168aa890e1cb012")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --force --index-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git rm --cached --ignore-unmatch 你要删除的文件名'")]),s._v(" --prune-empty --tag-name-filter "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --all\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch docs/books/javascript/assets/checkbox.mp4' --prune-empty --tag-name-filter cat -- --all")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("更新远程仓库")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --force --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --force --tags\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" for-each-ref --format"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete %(refname)'")]),s._v(" refs/original "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-ref --stdin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog expire --expire"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("now --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc --prune"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("now\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" count-objects -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);