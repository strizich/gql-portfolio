<template>
<div class="cases">
  <article class="case" v-if="caseStudy">
    <article-mast
      :title="caseStudy.title"
      :postType="caseStudy.postType"
      :caseImage="caseStudy.featuredImage.url"
      :role="caseStudy.projectDetail.role"
      :overview="caseStudy.projectDetail.overview"
      :updatedAt="caseStudy.projectDetail.launchDate"
      :backgroundColor="caseStudy.projectDetail.backgroundColor"/>
    <div class="case__wrapper">
      <vue-markdown class="case__content">{{ caseStudy.content }}</vue-markdown>
    </div>
  </article>
  <loading v-else/>
</div>
</template>

<script>
// Case Study Query
import caseStudy from '@/graphql/CaseStudy.graphql'

import VueMarkdown from 'vue-markdown'
// Components
import Loading from '@/components/Loading.vue'
import FeaturedImage from '@/components/FeaturedImage'
import ArticleMast from '@/components/ArticleMast'

export default {
  name: 'CaseStudy',
  url: '',
  apollo: {
    caseStudy: {
      query: caseStudy,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: { VueMarkdown, Loading, FeaturedImage, ArticleMast }
}
</script>

<style lang="scss">
.case{
  &__wrapper{
    padding-top:32px;
    max-width: 1024px;
    margin:0 auto;
  }
  &__content{
    width:100%;
    z-index: 1;
    position: relative;
    padding:0 16px;
    h1, h2, h3, h4{
      margin-bottom:16px;
    }
    p{
      line-height: 1.5;
      letter-spacing: .75px;
    }
    ul{
      padding-left: 16px;
      li{
        margin: 8px;
      }
    }
  }
}
  .fade{
    &-enter{
      opacity: 0;
      &-active{
        transition: all .23s;
        transition-delay: .23s;
      }
    }
    &-leave{
      &-active{
      transition: all .23s;
        opacity: 0;
      }
    }
  }

</style>
