<template>
  <footer class="container-fluid footer">
      <div class="row">
        <div class="col-sm-6 footer__tagline">
          <p>Created with love.</p>
        </div>
        <div class="col-sm-6 footer__powered-by">
          <p>Powered by <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a> and <a href="https://www.graphcms.com" target="_blank" rel="noopener">GraphCMS</a></p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .footer{
    padding:16px;
    color:#000;
    position: static;
    bottom:0;
    font-size: 11px;
    border-top:1px solid #efefef;
    p {
      margin-bottom: 0;
    }
    &__powered-by{
      text-align: right;
      a{
        color: #0057b1;
      }
    }
  }
  @media (max-width: 576px) {
    .footer{
      padding-bottom:32px;
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
