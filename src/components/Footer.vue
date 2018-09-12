<template>
  <footer class="container-fluid footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 footer__tagline">
          <p>Created with love.</p>
        </div>
        <div class="col-sm-6 footer__powered-by">
          <p>Powered by <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://www.graphcms.com" target="_blank">GraphCMS</a></p>
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

<style lang="scss" scoped>
  .footer{
    padding:16px 0;
    margin-bottom: env(safe-area-inset-bottom);
    background: #efefef;
    color:#000;
    position: static;
    bottom:0;
    font-size: 11px;
    p{
      margin-bottom: 0;
    }
      &__powered-by{
        text-align: right;
      }
  }
  @media (max-width: 576px) {
    .footer{
         p{
          margin-bottom:0px;
          letter-spacing: 0.75px;
        }
      &__tagline{
        text-align: center;
        font-size: 14px;
      }
      &__powered-by{
        text-align: center;
      }
    }
  }
</style>
