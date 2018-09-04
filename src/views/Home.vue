<template>
  <div class="home">
    <home-intro/>

    <div class="container-fluid" v-if="posts">
      <div class="cards container">
        <h5 class="cards__section">Case Studies</h5>
          <div class="cards__group row no-gutters">
            <article-card v-bind="article" v-for="article in posts" v-bind:key="article.slug" class="col-md-6 col-xs-12"/>
          </div>
      </div>
    </div>

    <loading v-else />
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue'
import Posts from '@/graphql/Posts.graphql'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import VueGallery from 'vue-gallery'

export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    samples: {}
  }),
  apollo: {
    $loadingKey: 'loading',
    posts: {
      query: Posts,
      variables: {
        first: 6,
        skip: 0
      }
    }
  },
  components: { Loading, ArticleCard, VueGallery, HomeIntro }
  // methods: {
  //   getImages: function () {
  //     for (let i = 0; i < this.samples.length; i++) {
  //       const sampleGroup = this.samples[i].images
  //       for (let j = 0; j < sampleGroup.length; j++) {
  //         const sampleImage = this.samples[i].images[j].url
  //         this.imageUrls.push(sampleImage)
  //       }
  //     }
  //     return this.imageUrls
  //   }
  // },
  // mounted () {
  //   this.getImages()
  // }
}
</script>

<style lang="scss" scoped>
  .sample{
    &__images{
      display:flex;
      flex-wrap: wrap;
      width:100%;
    }
    &__image{
      width: 130px;
      height:130px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left center;
      margin:16px;
    }
  }
  .cards{
    margin:0 auto;
    &__group{
      display:flex;
    }
    &__section{
      margin-bottom: 16px;
      margin-top:64px;
      font-weight:300;
      font-size:24px;
    }
  }
</style>
