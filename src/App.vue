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
h4{
  font-size: 11px;
}
 main{
   margin:0 auto;
   padding:54px 0 0;
 }
 body{
   padding:0;
 }
</style>
