<template>
<nav class="nav">
  <ul class="nav__list--left">
    <li class="nav__item--back" v-if="$route.path !== '/'">
      <router-link to="/" class="nav__link" >Back to home</router-link>
    </li>
  </ul>
  <ul class="nav__list--right">
    <li class="nav__item d-block d-sm-none">
      <router-link to="/sidebar" class="nav__link">Profile</router-link>
    </li>
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

<style lang="scss">

  .nav{
    list-style-type: none;
    position:fixed;
    top:8px;;
    right:0;
    width:100%;
    display:flex;
    justify-content: flex-end;
    z-index: 100;
    align-content: center;
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
        }
        &--right{
          @extend .nav__list--left;
        }
    }
    &__link{
      display:block;
      width:100%;
      color:#000;
      background:#fff;
      padding:8px;
      transition:all .32s;
      font-size: 14px;
      border-radius: 3px;
      &.router-link-exact-active{
        color:#fff;
        box-shadow: 0 4px 0 purple;
        background: rgba(0,0,0,1);
      }
    }
  }

@media (max-width: 576px) {
.nav{
  position: sticky;
  position:-webkit-sticky;
  top:0;
  left:0;
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
