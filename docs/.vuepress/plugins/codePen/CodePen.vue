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
        v-model.lazy="value"
        :placeholder="value"
      ></el-input>
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
    select: String,
    val: String,
  },
  data() {
    return {
      value: this.val,
    };
  },
  computed: {
    innerCode() {
      const rawCode = decodeURIComponent(this.code);
      // css变量分割
      const scopeCssReg = /(?<=(\}|(style\>))\s*)(.+)(?=\{)/g;

      // val变量注入
      const valReg = /{{val}}/g;

      // js变量注入/全局let/const改var
      const jsReg = /\<script\>(.*)\<\/script\>/s;
      const jsCode = rawCode.match(jsReg);
      if (jsCode) {
        setTimeout(() => {
          const script = document.createElement("script");
          script.innerText = jsCode[1]
            .replace(valReg, this.value)
            .replace(/(let)|(const)/g, "var")
            .replace(/\\n/g, "")
            .replace(/\s{2,}/g, " ");
          document.body.append(script);
          setTimeout(() => {
            script.remove();
          }, 200);
        }, 100);
      }

      return rawCode
        .replace(scopeCssReg, `.${this.randomClass} $3`)
        .replace(valReg, this.value)
        .replace(/(let)|(const)/g, "var")
        .replace(/\\n/g, "")
        .replace(/\s{2,}/g, " ");
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
  margin: 3rem 0;
  overflow: hidden;
}
.select {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  left: 50%;
  width: 50%;
}
.select * {
  background-color: #fff !important;
}
</style>