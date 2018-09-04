<template>
<div class="cases">
  <article class="case" v-if="post">
    <article-mast
      :title="post.title"
      :postType="post.postType"
      :introImage="post.introImage"
      :role="post.projectDetail.role"
      :overview="post.projectDetail.overview"
      :updatedAt="post.projectDetail.launchDate"
      :backgroundColor="post.projectDetail.backgroundColor"/>
    <div class="case__wrapper">
        <vue-markdown class="case__content" :source="post.content"/>
    </div>
  </article>
  <loading v-else/>
</div>
</template>

<script>
// Case Study Query
import Post from '@/graphql/Post.graphql'

import VueMarkdown from 'vue-markdown'
// Components
import Loading from '@/components/Loading.vue'
import FeaturedImage from '@/components/FeaturedImage'
import ArticleMast from '@/components/ArticleMast'

export default {
  name: 'Post',
  url: '',
  apollo: {
    post: {
      query: Post,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: { Loading, FeaturedImage, ArticleMast, VueMarkdown }
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
    max-width: 768px;
    margin: 0 auto;
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
        font-size: 16px;
      }
    }
    img{
      max-width: 486px;
      width:100%;
      margin: 0 auto;
      display: inline-block;
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
