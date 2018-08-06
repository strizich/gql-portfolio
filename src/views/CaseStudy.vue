<template>
  <article class="case">
    <div class="case__mast">
      <div class="case__mast__header">
        <h1>{{caseStudy.title}}</h1>
        <p class="lead">{{caseStudy.postType}}</p>
      </div>
      <div class="case__mast__content">
        <featured-image v-bind:caseImage="imgUrl"/>
        <div class="case__details" v-if="caseStudy.projectDetail">
          <div class="col">
            <h4>Overview</h4>
            <p class="text">{{caseStudy.projectDetail.overview}}</p>
          </div>
          <div class="col">
            <h4>My Role</h4>
            <p>{{caseStudy.projectDetail.role}}</p>
          </div>
          <div class="col">
            <h4>Launch Date</h4>
            {{caseStudy.projectDetail.launchDate[0] | moment("MMMM YYYY")}}
          </div>
        </div>
      </div>
    </div>
    <div class="case__content">
      <vue-markdown class="markdown">{{caseStudy.content}}</vue-markdown>
    </div>
  </article>
</template>

<script>
// import gql from 'graphql-tag'
import Loading from '../components/Loading.vue'
import VueMarkdown from 'vue-markdown'
import caseStudy from '@/graphql/CaseStudy.graphql'
import featuredImage from '../components/FeaturedImage'
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
  components: { VueMarkdown, Loading, featuredImage }
}
</script>

<style lang="scss" scoped>
.case{
  margin:0 auto;
  &__mast{
    padding-bottom:32px;
    &:before{
      background:#000;
      position:absolute;
      display:block;
      top: 30%;
      bottom:0;
      left:0;
      right:0;
      content:'';
      z-index: 0;
    }
    position: relative;
    &__header{
      margin-top:32px;
      max-width:1024px;
      width:100%;
      margin: 32px auto 0;
      padding-bottom: 32px;
    }
    &__content{
      max-width:1024px;
      width:100%;
      z-index: 1;
      position: relative;
      color:#fff;
      margin:0 auto;
    }
  }
  &__content{
      max-width:1024px;
      width:100%;
      z-index: 1;
      position: relative;
      padding: 0 120px;
      margin: 64px auto;
  }
  &__details{
    display:flex;
    justify-content: space-between;
  }
}
.col{
  width:33%;
  padding:16px;
}
</style>
