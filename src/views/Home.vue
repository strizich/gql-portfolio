<template>
  <div class="home">
    <home-intro/>
    <div class="container-fluid" v-if="posts">
      <div class="cards container">
        <h5 class="cards__section">Project Articles</h5>
          <div class="cards__group row no-gutters">
            <article-card v-bind="article" v-for="article in posts" v-bind:key="article.slug" class="col-sm-6 col-xs-12"/>
          </div>
      </div>
      <!-- <div class="updates container" v-if="latestUpdates">
        <h5 class="cards__section">Latest Updates</h5>
        <router-link :to="`/blog/${update.slug}`" v-for="update in latestUpdates" :key="update.id">
        <article class="update">
            <div class="update__header">
              <h4>{{update.title}}</h4>
              <small>{{update.createdAt| moment("MMM D YYYY, h:mm a")}}</small>
            </div>
            <div class="update__summary">
              <vue-markdown>{{update.summary}}</vue-markdown>
            </div>
        </article>
        </router-link>
      </div> -->
    </div>
    <loading v-else />
  </div>
</template>

<script>
import Posts from '@/graphql/Posts.graphql'
import HomeIntro from '@/components/HomeIntro.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import BlogPosts from '@/graphql/BlogPosts.graphql'

import VueMarkdown from 'vue-markdown'

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
      variables () {
        return {
          first: 4,
          skip: 0
        }
      }
    },
    latestUpdates: {
      query: BlogPosts
    }
  },
  components: { Loading, ArticleCard, HomeIntro, VueMarkdown }
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

  .updates{
    max-width: 512px;
  }
  .cards{
    margin:0 auto;
    max-width:1024px;
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
