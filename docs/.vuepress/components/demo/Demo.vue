<template>
  <div>
      <h1>这是demo</h1>
      <p>
        <strong>我们是：{{name}}</strong>
      </p>
      <em>我年龄是：{{age}}</em>
      <slot></slot>
      <h3>这是demo写的footer</h3>
  </div>
</template>

<script>
export default {
    name: 'demo',
    props: {
        name: {
            type: String,
            default: '1'
        },
        age: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>