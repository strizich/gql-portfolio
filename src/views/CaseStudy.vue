<template>
  <article class="case">
    <article-mast
      :title="caseStudy.title"
      :postType="caseStudy.postType"
      :caseImage="imgUrl"
      :role="caseStudy.projectDetail.role"
      :overview="caseStudy.projectDetail.overview"
      :updatedAt="caseStudy.projectDetail.launchDate"
    />
      <vue-markdown class="case__content">{{ caseStudy.content }}</vue-markdown>
  </article>
</template>

<script>
// import gql from 'graphql-tag'
import Loading from '../components/Loading.vue'
import VueMarkdown from 'vue-markdown'
import caseStudy from '@/graphql/CaseStudy.graphql'
import featuredImage from '../components/FeaturedImage'
import articleMast from '../components/ArticleMast'

export default {
  name: 'CaseStudy',
  data: () => ({
    imgUrl: 'img/onemv_dispatch_feature.png'
  }),
  apollo: {
    caseStudy: {
      query: caseStudy,
      variables () {
        return {
          id: this.$route.params.slug
        }
      }
    }
  },
  components: { VueMarkdown, Loading, featuredImage, articleMast }
}
</script>

<style lang="scss" scoped>
.case{
  &__content{
      max-width:1024px;
      width:100%;
      z-index: 1;
      position: relative;
      padding: 0 120px;
      margin: 64px auto;
  }
}
</style>
