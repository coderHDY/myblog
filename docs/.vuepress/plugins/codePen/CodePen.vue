<template>
  <div class="code-pen" :class="randomClass">
    <div
      class="select"
      v-if="(selectVals && selectVals.length > 1) || val !== undefined"
    >
      <el-select
        v-if="selectVals && selectVals.length > 1"
        v-model="value"
        :placeholder="value"
      >
        <el-option
          v-for="item in selectVals"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-input
        v-else-if="val !== undefined"
        v-model="value"
        :placeholder="value"
        :type="type"
      ></el-input>
      <div v-if="label" class="label">{{ label }}</div>
    </div>
    <!-- <div v-html="innerCode" ref="coder"></div> -->
    <iframe
      frameborder="0"
      id="frame"
      :srcDoc="innerCode"
      :style="{ width: `${width}px`, height: `${height}px` }"
    ></iframe>
    <!-- <div style="height: 0; overflow: hidden"> -->
    <div v-if="isShowCode">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * ::: codePen value=destination-atop width=500 height=200 select=[destination-atop,source-over,source-in,source-out,source-atop,destination-over,destination-in,destination-out,lighter,copy,xor,multiply,screen,overlay,darken,lighten,color-dodge,color-burn,hard-light,soft-light,difference,exclusion,hue,saturation,color,luminosity]
 * ```html
 * XXX
 * ```
 *
 */
export default {
  props: {
    width: {
      type: String,
      default: `100%`,
    },
    height: {
      type: String,
      default: "200",
    },
    code: String,
    type: {
      type: String,
      default: "string",
    },
    showCode: {
      type: String,
      default: "true"
    },
    select: String,
    val: String,
    label: String,
  },
  data() {
    return {
      value: this.val,
    };
  },
  mounted() {
    console.log(this.isShowCode);
  },
  computed: {
    // 方案三：iframe
    innerCode() {
      let rawCode = decodeURIComponent(this.code);
      // html内部标签删除
      // const htmlReg = /<\/?body>|<head>.*<\/head>|<\/?html[^>]*>|<\!DOCTYPE\s*html>/gs;
      // css样式隔离
      // const scopeCssReg = /((}|style>)[^\.\w#]*)([^{]+)(\s*{)/g;

      // js变量注入/全局let/const改var
      // const jsReg = /\<script\>(.*)\<\/script\>/s;
      // const jsCode = rawCode.match(jsReg);

      // val变量注入
      const valReg = /{{val}}/g;

      // if (jsCode) {
      // 方案二：将js代码放到本组件沙盒执行

      // this.$nextTick(() => {
      //   const querySlectorReg1 = /document(\.querySelector)/g;
      //   const querySlectorReg2 =
      //     /document.getElementById\(['"`]([^'"`]+)['"`]\)/g;
      //   const querySlectorReg3 =
      //     /document.getElementsByClassName\(['"`]\s*([^'"`]+)['"`]\)/g;
      //   function sandBox() {
      //     try {
      //       eval(
      //         jsCode[1]
      //           .replace(valReg, this.value)
      //           .replace(querySlectorReg1, "this.$el$1")
      //           .replace(querySlectorReg2, `this.$el.querySelector("#$1")`)
      //           .replace(querySlectorReg3, `this.$el.querySelector(".$1")`)
      //       );
      //     } catch (e) {
      //       console.warn(e);
      //     }
      //   }
      //   sandBox.call(this);
      // });

      // 方案一: 添加js代码形式
      // setTimeout(() => {
      //   const script = document.createElement("script");
      //   script.innerText = jsCode[1]
      //     .replace(valReg, this.value)
      //     .replace(/(let)|(const)/g, "var")
      //     .replace(/\\n/g, "")
      //     .replace(/\s{2,}/g, " ");
      //   document.body.append(script);
      //   setTimeout(() => {
      //     script.remove();
      //   }, 200);
      // }, 100);
      // }

      const bodyReg = /(\<body)([^\>]*\>)/g;

      rawCode = bodyReg.test(rawCode)
        ? rawCode.replace(bodyReg, '$1 style="overflow:hidden" $2')
        : `<body style="overflow:hidden" >\n${rawCode}\n</body>`;
      return rawCode.replace(valReg, this.value);
      // .replace(scopeCssReg, `$1 .${this.randomClass} $3 $4`)
      // .replace(jsReg, "")
      // .replace(htmlReg, "")
      // .replace(/(let)|(const)/g, "var")
      // .replace(/\\n/g, "")
      // .replace(/\s{2,}/g, " ")
    },
    selectVals() {
      if (!this.$props.select) return [];

      // 截取
      const str = this.$props.select.slice(1, -1);
      const stack = [];
      let idx = 0;
      const ans = [];
      const pairToken = {
        "(": ")",
        "[": "]",
        "{": "}",
        '"': '"',
        "'": "'",
        "`": "`",
      };
      for (let i = 0; i < str.length; i++) {
        if ("([{'\"`".includes(str[i])) {
          stack.push(str[i]);
        } else if (")]}'\"`".includes(str[i]) && stack.length > 0) {
          const lastToken = stack[stack.length - 1];
          if (pairToken[lastToken] === str[i]) {
            stack.pop();
          }
        } else if (str[i] === "," && stack.length === 0) {
          ans.push(str.slice(idx, i).trim());
          idx = i + 1;
        }
      }
      if (idx < str.length - 1) {
        ans.push(str.slice(idx, str.length).trim());
      }

      return ans;
    },
    randomClass() {
      return `c${this._uid}_${Math.floor(Math.random() * 1000)}`;
    },
    isShowCode() {
      return Boolean("true" === this.showCode.toLowerCase());
    }
  },
};
</script>
  
<style scoped>
.code-pen {
  margin: 1rem 0;
  overflow: hidden;
}
.select {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
}
.label {
  height: 40px;
  line-height: 40px;
  margin-right: 1rem;
  font-weight: 700;
  color: cornflowerblue;
}
.label::after {
  content: ":";
}
.select * {
  background-color: #fff !important;
}
</style>