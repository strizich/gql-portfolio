<template>
<div class="about">
  <loading v-if="$apollo.loading"/>
  <div class="about__wrapper" v-else>
    <profile-mast v-bind="about"/>
    <div class="about__content container">
      <p>Still writing the content for this page.</p>
    </div>
  </div>
</div>
</template>

<script>
import ProfileMast from '@/components/ProfileMast'
import Loading from '@/components/Loading'
import About from '@/graphql/About.graphql'

export default {
  name: 'About',
  data: () => ({
    title: 'About'
  }),
  apollo: {
    about: {
      query: About,
      variables () {
        return {
          slug: 'about'
        }
      }
    }
  },
  components: {ProfileMast, Loading}
}
</script>
<style lang="scss">
  .about{
    &__content{
      padding-top: 64px;
    }
  }
</style>
