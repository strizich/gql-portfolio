<template>
<div class="home">
  <loading v-if="$apollo.loading"/>
  <div class="home__content" v-else>
    <home-mast/>
    <div class="container-fluid">
      <div class="cards container">
        <h5 class="cards__section">Project Articles</h5>
          <div class="cards__group row no-gutters">
            <article-card v-bind="article" v-for="article in posts" :key="article.slug" class="col-sm-6 col-xs-12"/>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Posts from '@/graphql/Posts.graphql'
import HomeMast from '@/components/HomeMast.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Home',
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
    }
  },
  components: { Loading, ArticleCard, HomeMast, VueMarkdown }
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
