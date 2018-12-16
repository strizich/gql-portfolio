<template>
<div id="app">
  <app-nav/>
  <div class="app__wrapper">
    <main>
      <!-- <transition name="fade" appear mode="out-in"> -->
        <router-view/>
      <!-- </transition> -->
    </main>
  </div>
  <app-footer/>
</div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'app',
  components: { TheNav, TheFooter }
}
</script>
<style lang="scss">
.app__wrapper{
  display:flex;
  width:100%;
}

main{
  width:100%;
  min-height:100vh;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom:32px;
}

header{
  min-width:200px;
  background: #fff;
  height:100vh;
  position: sticky;
  position: -webkit-sticky;
  top:0;
  left:0;
}

// Router Fade Animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .23s;
}
.fade-enter-active {
  transition-delay: .23s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
