<template>
  <div
    class="code-pen"
    :class="randomClass"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <div style="height: 0; overflow: hidden">
      <slot></slot>
    </div>

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
    <div v-html="innerCode"></div>
  </div>
</template>

<script>
/**
 * ::: codePen value=destination-atop width=500 height=200 select=[destination-atop,source-over,source-in,source-out,source-atop,destination-over,destination-in,destination-out,lighter,copy,xor,multiply,screen,overlay,darken,lighten,color-dodge,color-burn,hard-light,soft-light,difference,exclusion,hue,saturation,color,luminosity]
 * ```html
 * XXX
 * ```
 *
 * 注：js代码内不能有单引号，会报错！！！
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
    select: String,
    val: String,
    label: String,
  },
  data() {
    return {
      value: this.val,
    };
  },
  computed: {
    innerCode() {
      const rawCode = decodeURIComponent(this.code);
      // html内部标签删除
      const htmlReg =
        /<\/?body>|<head>.*<\/head>|<\/?html[^>]*>|<\!DOCTYPE\s*html>/gs;

      // css样式隔离
      const scopeCssReg = /((}|style>)[^\.\w#]*)([^{]+)(\s*{)/g;

      // val变量注入
      const valReg = /{{val}}/g;

      // js变量注入/全局let/const改var
      const jsReg = /\<script\>(.*)\<\/script\>/s;
      const jsCode = rawCode.match(jsReg);
      if (jsCode) {
        // 方案二：将js代码放到本组件沙盒执行

        this.$nextTick(() => {
          try {
            const querySlectorReg1 = /document(\.querySelector)/g;
            const querySlectorReg2 =
              /document.getElementById\(['"`]([^'"`]+)['"`]\)/g;
            const querySlectorReg3 =
              /document.getElementsByClassName\(['"`]\s*([^'"`]+)['"`]\)/g;
            function sandBox() {
              eval(
                jsCode[1]
                  .replace(valReg, this.value)
                  .replace(querySlectorReg1, "this.$el$1")
                  .replace(querySlectorReg2, `this.$el.querySelector("#$1")`)
                  .replace(querySlectorReg3, `this.$el.querySelector(".$1")`)
              );
            }
            sandBox.call(this);
          } catch (e) {
            console.warn(e);
          }
        });
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
      }

      return (
        rawCode
          .replace(scopeCssReg, `$1 .${this.randomClass} $3 $4`)
          .replace(htmlReg, "")
          .replace(valReg, this.value)
          // .replace(/(let)|(const)/g, "var")
          .replace(/\\n/g, "")
          .replace(/\s{2,}/g, " ")
      );
    },
    selectVals() {
      if (!this.$props.select) return [];
      return this.$props.select.slice(1, -1).split(",");
    },
    randomClass() {
      return `c${this._uid}_${Math.floor(Math.random() * 1000)}`;
    },
  },
  mounted() {
    // console.log(decodeURIComponent(this.code));
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