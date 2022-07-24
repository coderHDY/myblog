<template>
  <div class="wrapper">
    <input type="text" v-model="pwd">
    <div>
        <span class="secret-copy">{{ secret }}</span>
    </div>
  </div>
</template>
<script>
import md5 from 'md5';

export default {
    data() {
        return {
            pwd: "",
        }
    },
    computed:{
        secret() {
            return this.pwd.trim() === '' ? '' : md5(this.pwd);
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flow-root;
    height: 80px;
}
.secret-copy {
    user-select: all;
}
.secret-copy::selection {
    color: rgb(78, 86, 248);
}
</style>