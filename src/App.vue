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

<style lang="scss"></style>
