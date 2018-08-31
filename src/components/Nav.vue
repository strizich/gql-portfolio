<template>
<nav class="nav">
  <router-link class="logo" to="/">Jason Strizich | strizich.design</router-link>
  <ul class="nav__list--right">
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
    justify-content: space-between;
    z-index: 100;
    align-content: center;
    padding-top:38px;
    background-color: #fff;

    &__item{
      color:#fff;
      margin-right:8px;
      &:hover{
        color:#fff!important;
      }
    }
    &__list{
        &--left{
          display:flex;
          list-style-type: none;
          margin-bottom:0;
          padding:0;
          margin-right:8px;
          align-self:center;
        }
        &--right{
          @extend .nav__list--left;
        }
    }
    &__link{
      display:block;
      width:100%;
      color: #000;
      padding:8px;
      transition:all .32s;
      font-size: 14px;
      border-radius: 3px;
      &.router-link-exact-active{
        color: #fff;
        background: rgba(0,0,0,1);
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
    padding:8px;
    margin:8px 16px;
    transition:all .32s;
    font-size: 14px;
    background: transparent;
  &.router-link-exact-active{
      color:#fff;
      box-shadow: 0 4px 0 purple;
      background: rgba(255,255,255, .1);
    }
  }
}

  }
</style>
