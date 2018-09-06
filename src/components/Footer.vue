<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          Created with love.
        </div>
        <div class="col-sm-6 text-right">
          Powered by <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://www.graphcms.com" target="_blank">GraphCMS</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
  footer{
    margin-top:64px;
    padding:16px 0;
    background: #efefef;
    color:#000;
    position: static;
    bottom:0;
    font-size: 11px;
  }
</style>
