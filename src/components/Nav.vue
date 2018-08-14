<template>
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item" v-if="$route.path !== '/'">
      <router-link to="/" class="nav__link" >Home</router-link>
    </li>
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
    top:0;
    right:0;
    width:100%;
    display:flex;
    justify-content: flex-end;
    z-index: 100;
    &__item{
      margin: 8px;
    }
    &__list{
      list-style-type: none;
    }
    &__link{
      display:block;
      width:100%;
      background-color:#fff;
      color:#000;
      padding:8px;
      transition:all .32s;
      font-size: 14px;
      border-radius: 3px;
    }
  }
  .router-link-exact-active{
    color:#fff;
    background-color: purple;
  }
</style>
