<template>
  <div id="app">
    <PageHeader/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import PageHeader from './components/AppHeader.vue'

export default{
  name: 'app',
  components: { PageHeader }
}
</script>

<style lang="scss">
 main{
   max-width:1440px;
   margin:0 auto;
   padding:54px 16px 0;
 }
</style>
