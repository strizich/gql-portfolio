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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body{
    padding:0;
  }

  .text{
    &__large{
      font-size: 58px;
    }
  }
  .col{
    width:33%;
    padding:16px;
  }
</style>
