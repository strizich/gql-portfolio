<template>
  <div id="app">
    <PageHeader/>
    <main>
      <sidebar />
      <transition name="fade" appear>
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: { PageHeader, Sidebar }
}
</script>

<style lang="scss">
main{
  display:flex;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
