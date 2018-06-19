<template>
  <div id="app">
    <AppHeader/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';

  export default{
    name: 'app',
    components: { AppHeader },
  }
</script>

<style lang="scss">
 main{
   max-width:1440px;
   margin:0 auto;
   padding:0 16px
 }
</style>
