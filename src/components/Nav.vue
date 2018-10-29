<template>
<nav class="nav">
  <router-link class="logo" to="/">Jason Strizich | strizich.design</router-link>
  <ul class="nav__list">
    <!-- <li class="nav__item">
      <router-link to="/projects" class="nav__link">Projects</router-link>
    </li> -->
    <li class="nav__item">
      <router-link to="/about" class="nav__link">About</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss" scoped>
  .logo{
    background: url(/img/logo.svg);
    text-indent: -10000px;
    width:32px;
    height:32px;
    margin:8px 16px;
  }
  .nav{
    list-style-type: none;
    position:sticky;
    top: -32px;
    right:0;
    width:100%;
    display:flex;
    justify-content: space-between;
    z-index: 100;
    align-content: center;
    padding-top:32px;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    background-color: rgba(255,255,255,.75);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 1px 0 rgba(0,0,0,.05);
    &__item{
      color:#fff;
      margin-right:8px;
      &:hover{
        color:#fff!important;
      }
    }
    &__list{
          display:flex;
          list-style-type: none;
          margin-bottom:0;
          padding:0;
          margin-right:8px;
          margin-left:auto;
          align-self:center;
    }
    &__link{
      display:block;
      width:100%;
      color: #000;
      padding:8px;
      transition:all .32s;
      font-size: 14px;
      text-align: center;
       &.router-link-exact-active, &.router-link-active{
        background-color: rgba(0,0,0, .1);
      }
    }
  }
@media (max-width: 576px) {
  .logo{
    position:absolute;
    left:50%;
    margin-left:-16px;
  }
  .nav{
    width:100%;
    display:flex;
    justify-content: space-between;
    &__link{
      display:block;
      margin:8px 0;
      transition:all .32s;
      font-size: 14px;
      background: transparent;
      border-radius: 6px;
    }
  }
}
</style>
