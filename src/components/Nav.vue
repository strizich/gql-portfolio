<template>
<nav class="nav">
  <router-link class="logo" to="/">Jason Strizich | strizich.design</router-link>
  <ul class="nav__list">
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
    top: -38px;
    right:0;
    width:100%;
    display:flex;
    justify-content: flex-end;
    z-index: 100;
    align-content: center;
    padding-top:38px;
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
       &.router-link-exact-active, &.router-link-active{
        background-color: rgba(0,0,0, .1);
        text-align: center;
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
  background:#000;
  color:#fff;
  display:flex;
  justify-content: space-between;
  &__link{
    display:block;
    width:100%;
    color:#fff;
    padding:8px 4px;
    margin:8px 16px;
    transition:all .32s;
    font-size: 14px;
    background: transparent;
    &.router-link-exact-active, &.router-link-active{
      color:#fff;
      box-shadow: 0 4px 0 purple;
      background-color: rgba(255,255,255, .1);
      text-align: center;
      padding: 8px 4px;
    }
  }
}
}
</style>
