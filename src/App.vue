<template>
  <div id="app">
    fex-ui for Vue
    <FexTest />
  </div>
</template>

<script>
import { FexTest } from '../packages/index'
export default {
  name: 'App',
  components: {
    FexTest,
  },
}
</script>

<style lang="less">
#app {
  width: 200px;
  height: 100px;
  background-color: olivedrab;
}
</style>
