<template>
<div id="app">
  <the-nav/>
  <div class="app__wrapper">
    <main>
        <router-view/>
    </main>
  </div>
  <the-footer/>
</div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: { TheNav, TheFooter }
}
</script>
<style lang="scss">
  main{
    width:100%;
    min-height:100vh;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom:32px;
  }
</style>
