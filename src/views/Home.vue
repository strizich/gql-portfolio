<template>
  <div class="home">
    <div class="intro">
        <h1 class="headline">
          <span>Hello, I am a </span>
          <span class="scroller__container">
            <i class="anim">UI / UX Designer</i>
            <span> and </span> <i class="anim">developer</i>
          </span> <span> and I create </span> <i class="anim">apps</i> and <i class="anim">websites.</i>
        </h1>
        <p class="lead"></p>
    </div>
    <div class="container-fluid">
 <div class="cards">
      <h3 class="cards__section">Samples</h3>
      <div class="row no-gutters">
        <div class="col-3" v-for="asset in assets" v-bind:key="asset.id">
          <span class="img" :style="`background-image:url(${asset.url})`"/>
        </div>
        <div class="col-3" v-for="asset in assets" v-bind:key="asset.id">
          <span class="img" :style="`background-image:url(${asset.url})`"/>
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
import assets from '@/graphql/Samples.graphql'
import caseStudies from '@/graphql/CaseStudies.graphql'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import anime from 'animejs'
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
    },
    assets: {
      query: assets
    }
  },
  components: { Loading, ArticleCard },
  methods: {
    animateIntro: function () {
      let offsetScroller = anime.timeline({
        targets: '.anim',
        delay: function (el, i) { return i * 100 },
        duration: 1000,
        elasticity: 300,
        loop: false
      })
      offsetScroller
        .add({
          top: [
            { value: 32 },
            { value: 0 }
          ],
          opacity: [
            { value: 0 },
            { value: 1 }
          ]
        })
    }
  },
  mounted () {
    this.animateIntro()
  }
}
</script>

<style lang="scss" scoped>
  .img{
    display:block;
    width: 100%;
    height: 300px;
    background-size:cover;
    background-position:center center;
  }
  .intro{
    background:#fff;
    color:#000;
    padding:64px 72px;
    font-size: 27px;

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
  .headline{
    font-weight: 100;
  }
  .anim{
    opacity: 0;
    width:auto;
    position:relative;
    font-weight:300;
    color:#9013FE;
  }

@media (max-width: 576px) {
  .intro{
    padding:62px 16px;
  }
}
</style>
