<template>
  <div class="code-pen" :style="{ width: `${width}px`, height: `${height}px` }">
    <div class="select">
      <el-select
        v-if="selectVals && selectVals.length > 1"
        v-model="val"
        :placeholder="val"
      >
        <el-option
          v-for="item in selectVals"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-input v-else v-model="val" :placeholder="val"></el-input>
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
    value: String,
  },
  data() {
    return {
      val: this.value,
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
            .replace(valReg, this.val)
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
        .replace(scopeCssReg, ".code-pen $3")
        .replace(valReg, this.val)
        .replace(/(let)|(const)/g, "var")
        .replace(/\\n/g, "")
        .replace(/\s{2,}/g, " ");
    },
    selectVals() {
      if (!this.$props.select) return [];
      return this.$props.select.slice(1, -1).split(",");
    },
  },
};
</script>
  
<style scoped>
.code-pen {
  margin: 3rem 0;
  overflow: hidden;
}
.select {
  position: relative;
  left: 70%;
}
</style>