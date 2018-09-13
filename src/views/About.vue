<template>
<div class="about" v-if="about">
  <profile />
  <div class="about__content container">
    <vue-markdown class="page__intro" :source="about.introduction"/>
    <vue-markdown class="page__content" :source="about.content"/>
    hey joe
  </div>
</div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import about from '@/graphql/AboutView.graphql'
import VueMarkdown from 'vue-markdown'

export default {
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
  components: {Profile, VueMarkdown}
}
</script>
<style lang="scss">
  .about{
    &__content{
      padding-top: 64px;
    }
  }
</style>
