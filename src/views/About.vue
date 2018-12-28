<template>
<div class="about" v-if="about">
  <profile-mast v-bind="about"/>
  <div class="about__content container">
    <p>Still writing the content for this page.</p>
  </div>
</div>
</template>

<script>
import ProfileMast from '@/components/ProfileMast'

import about from '@/graphql/About.graphql'

export default {
  name: 'About',
  data: () => ({
    title: 'About'
  }),
  apollo: {
    about: {
      query: about,
      variables () {
        return {
          slug: 'about'
        }
      }
    }
  },
  components: {ProfileMast}
}
</script>
<style lang="scss">
  .about{
    &__content{
      padding-top: 64px;
    }
  }
</style>
