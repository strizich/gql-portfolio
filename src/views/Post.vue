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
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    padding:0 64px;
    font-weight: 300;

    h1, h2, h3, h4{
      margin-bottom: 16px;
      font-weight: 500;
    }

    h2{
      margin-bottom: 16px;
      margin-top:64px;
      font-weight:300;
      font-size:24px;
    }

    h3{
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 16px;
      color: rgba(0,0,0,.9);
    }

    h4{
      font-size: 16px;
      margin-bottom:4px;
    }

    p{
      line-height: 1.5;
      letter-spacing: .55px;
    }

    ul{
      padding-left: 16px;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: .55px;
      margin-left:16px;
    }

    pre > code{
      -webkit-overflow-scrolling: touch;
    }
  }
}

.image__group{
  display: flex;
  align-items:center;
  justify-content: center;
  margin-bottom:32px;
  margin-left:-64px;
  margin-right:-64px;
  .col{
    padding:0px;
  }
  img{
    border-radius: 3px;
  }
  img:only-child{
    width: 100%;
    border: 1px solid #efefef;
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
  @media (max-width: 576px) {
    pre{
      max-height: 512px;
      white-space: wrap;
      & > code{
        white-space: wrap;
      }
    }
    .case__content{
      padding: 16px;
    }
  }
</style>
