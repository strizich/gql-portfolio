<template>
  <div class="home">
    <featured-project/>
    <Loading v-if="$apollo.loading"/>
  </div>
</template>

<script>
import FeaturedProject from '../components/Featured.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'home',
  loading: false,
  components: { FeaturedProject, Loading }
}
</script>

<style lang="scss" scoped></style>
