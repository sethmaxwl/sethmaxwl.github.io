<template lang='pug'>
  #four-oh-four
    v-img(src='@/assets/404.svg', contain='', max-height='600')
    .header.text-center Whoops!
    .subheader.text-center Looks like that page doesn't exist.
</template>

<script>
export default {
  name: 'FourOhFour'
}
</script>

<style lang='scss'>
  #four-oh-four {
    height: calc(100vh - 186px);
    background-color: #53a7eb;
  }
</style>