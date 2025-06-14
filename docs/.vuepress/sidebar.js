const front = {
  "/front/base/": [
    {
      title: "基础类型",
      collapsable: false,
      children: [
        "",
        "typeof",
        "var",
        "string",
        "array",
        "number",
        "function",
        "object",
        "class",
        "symbol",
      ],
    },
    {
      title: "内置类型/对象",
      collapsable: false,
      children: [
        "set",
        "map",
        "reg",
        "date",
        "math",
        "proxy",
        "promise",
        "async",
        "generator",
        "dom",
        "bom",
        "history",
        "event",
        "json",
        "ajax",
      ],
    },
    {
      title: "必备知识",
      collapsable: false,
      children: [
        "fetch",
        "cors",
        "storage",
        "module",
        "worker",
        "canvas",
        "canvas2d",
        "webanimation",
        "jwt",
        "IndexeDB",
      ],
    },
  ],
  "/front/algorithm/": [
    {
      title: "数据结构",
      collapsable: false,
      children: ["", "queue", "linklist", "hash", "binarytree"],
    },
    {
      title: "算法",
      collapsable: false,
      children: [
        "sort",
        "greedy",
        "dynamic",
        "tree",
        "leetcode",
        "regexp",
        "pointer",
        "recall",
        "chart",
      ],
    },
    {
      title: "设计模式",
      collapsable: false,
      children: ["designPattern"],
    },
  ],
  "/front/interview/": ["", "css", "algorithm", "project", "js", "js100"],
  "/front/css/": [
    {
      title: "基础样式",
      collapsable: false,
      children: [
        "",
        "grid",
        "selector",
        "box",
        "text",
        "responsive",
        "special",
        "form",
        "omitted",
      ],
    },
    {
      title: "css动画",
      collapsable: false,
      children: ["animation", "transition", "transform", "effects"],
    },
    {
      title: "SVG",
      collapsable: false,
      children: ["svg", "svgApi", "svgAnimate"],
    },
  ],
  "/front/vue2/": ["", "props", "router", "reactive"],
  "/front/vue3/": ["", "project"],
  "/front/react/": [
    "",
    "hooks",
    "cli",
    "router",
    "redux",
    "important",
    "react18",
    "scope",
    "context",
    "test",
  ],
  "/front/webpack/": [""],
  "/front/technique/": [
    "",
    "vue3hooks",
    "tools",
    "toolsfunc",
    "react-hooks",
    "axiostools",
  ],
  "/front/ios/": [
    {
      title: "swift",
      collapsable: false,
      children: [
        "",
        "base",
        "controls",
        "string",
        "number",
        "array",
        "set",
        "dictionary",
        "func",
        "class",
        "autolayout",
      ],
    },
    {
      title: "storyboard",
      collapsable: false,
      children: [
        "ui",
        "storyboard",
        "storyboardComp"
      ],
    },
    {
      title: "OC",
      collapsable: false,
      children: [
        "ocBase",
        "oc",
        "ocSkills",
        "ocImportant",
        "OCBaseClass",
        "xib",
      ],
    },
  ],
  "/front/test/": [
    {
      title: "jest",
      collapsable: false,
      children: [""],
    },
  ],
  "/front/AI/": [
    {
      title: "AI使用技巧",
      collapsable: false,
      children: [""],
    },
  ],
};

const backend = {
  "/backend/database/": [
    {
      title: "NoSQL",
      collapsable: false,
      children: [""],
    },
  ],
  "/backend/node/": ["", "upload-file"],
};

const skill = {
  "/skill/git/": ["", "hight_level", "git_thinking", "action"],
  "/skill/linux/": [
    {
      title: "基础命令",
      collapsable: false,
      children: ["", "base", "bugs", "regexp", "install"],
    },
    {
      title: "辅助工具",
      collapsable: false,
      children: ["pm2", "git", "node", "nginx"],
    },
  ],
  "/skill/shell/": [
    {
      title: "基础命令",
      collapsable: false,
      children: [""],
    },
  ],
  "/skill/internet/": [
    {
      title: "网络基础",
      collapsable: false,
      children: [""],
    },
  ],
  "/skill/introduction/": ["", "ability", "plugin_dev", "traps"],
  "/skill/smalltips/": ["", "vuepress", "vscode", "process"],
};

const books = {
  "/books/javascript/": [
    {
      title: "编程能力",
      collapsable: false,
      children: ["", "design", "vue3ts", "ts"],
    },
    {
      title: "编程思想",
      collapsable: false,
      children: ["principle"],
    },
  ],
  "/books/computer/": [
    {
      title: "计算机底层",
      collapsable: false,
      children: [""],
    },
  ],
  "/books/skill/": [
    {
      title: "项目管理",
      collapsable: false,
      children: [""],
    },
  ],
};

module.exports = {
  ...front,
  ...backend,
  ...skill,
  ...books,
};
