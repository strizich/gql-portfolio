<template>
<div id="app">
  <!-- <PageHeader/> -->
  <div class="app__wrapper">
    <header class="d-none d-sm-block">
      <sidebar/>
    </header>

    <main>
      <app-nav/>
      <transition name="fade" appear mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import AppNav from './components/Nav.vue'
export default {
  name: 'app',
  components: { Sidebar, AppNav }
}
</script>

<style lang="scss">
.app__wrapper{
  display:flex;
  width:100%;
}

main{
  width:100%;
}

header{
  min-width:200px;
  background:#fff;
  height:100vh;
  position: sticky;
  position: -webkit-sticky;
  top:0;
  left:0;
}

// Router Fade Animations
.fade-enter-active, .fade-leave-active {
  transition: .23s;
}
.fade-enter-active {
  transition-delay: .23s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
