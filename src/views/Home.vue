<template>
  <div class="home">
    <div class="intro">
        <h1 class="headline">Hello, I am a UI/UX Engineer.</h1>
        <p class="lead"></p>
    </div>
    <div class="container-fluid">
 <div class="cards">
      <h3 class="cards__section">Samples</h3>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
         BLAH BLAH BLAH
        </div>
      </div>
    </div>
    <div class="cards" v-if="caseStudies">
      <h3 class="cards__section">Case Studies</h3>
        <div class="cards__group row">
          <article-card v-bind="caseStudy" v-for="caseStudy in caseStudies" v-bind:key="caseStudy.slug" class="col-sm-12 col-md-6 col-lg-4"/>
        </div>
    </div>
    <loading v-else/>
    </div>
  </div>
</template>

<script>
import caseStudies from '@/graphql/CaseStudies.graphql'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    postCount: null,
    imgUrl: 'img/onemv_dispatch_feature.png'
  }),
  apollo: {
    $loadingKey: 'loading',
    caseStudies: {
      // graphql/CaseStudies.graphql
      query: caseStudies,
      variables: {
        first: 6,
        skip: 0
      }
    }
  },
  components: { Loading, ArticleCard }
}
</script>

<style lang="scss" scoped>
  .intro{
    background:#fff;
    color:#000;
    padding:64px 72px;
  }
  .cards{
    margin:0 auto;

    &__group{
      display:flex;
    }
    &__section{
      margin-bottom: 16px;
      margin-top:64px;
    }
  }
</style>
