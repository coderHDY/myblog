(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{961:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),a("ul",[a("li",[t._v("重写"),a("code",[t._v("description")]),t._v("方法可以自定义打印对象")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("@implementation Student\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("description "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("des "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSString stringWithFormat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"啦啦啦啦啦，我是一个人 %p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" des"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@end\n\n\nStudent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Student new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 啦啦啦啦啦，我是一个人 0x6000000d80d0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"sel消息机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sel消息机制"}},[t._v("#")]),t._v(" SEL消息机制")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SEL")]),t._v("是"),a("code",[t._v("Objective-C")]),t._v("中的一个类型，用于表示方法名，它实际上是一个"),a("code",[t._v("C")]),t._v("语言中的"),a("code",[t._v("指针")]),t._v("，指向一个"),a("code",[t._v("C")]),t._v("函数的"),a("code",[t._v("函数名")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("@selector")]),t._v("用于获取一个方法的"),a("code",[t._v("SEL")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("performSelector:")]),t._v("用于执行一个"),a("code",[t._v("SEL")]),t._v("对应的方法。")]),t._v(" "),a("li",[a("strong",[t._v("将SEL对象作为一个消息发送给一个对象，就是命令该对象执行该对象的方法。")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("Student"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Student new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSEL s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sayHi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stu performSelector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带参数")]),t._v("\nSEL s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sayHi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stu performSelector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("s2 withObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"oc中的点语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oc中的点语法"}},[t._v("#")]),t._v(" OC中的点语法")]),t._v(" "),a("ul",[a("li",[t._v("只是简写了"),a("code",[t._v("getter")]),t._v("和"),a("code",[t._v("setter")])]),t._v(" "),a("li",[a("strong",[t._v("获取和使用的时候去掉属性的下划线")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("Student"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Student new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);