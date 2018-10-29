<template>
  <div class="post__block">
  <article-status v-if="post" :status="post.status" />
  <article class="post" v-if="post">
    <article-mast
      :title="post.title"
      :postType="post.postType"
      :introImage="post.introImage"
      :mast="post.projectDetail"/>
    <div class="post__wrapper">
      <vue-markdown class="post__content" :source="post.content" />
    </div>
  </article>
  <loading v-else/>
</div>
</template>

<script>
// Case Study Query
import Post from '@/graphql/Post.graphql'

// Plugins
import VueMarkdown from 'vue-markdown'

// Components
import Loading from '@/components/Loading.vue'
import ArticleStatus from '@/components/ArticleStatus.vue'
import FeaturedImage from '@/components/FeaturedImage'
import ArticleMast from '@/components/ArticleMast'

export default {
  name: 'Post',
  data: () => ({
    hideMe: false,
    title: null,
    post: [],
    handle: null
  }),
  metaInfo () {
    return {
      title: this.post.title,
      titleTemplate: '%s | strizich.design',
      meta: [
        { charset: 'utf-8' },
        {
          'property': 'og:title',
          'content': this.post.title
        },
        {
          'property': 'og:type',
          'content': 'website'
        },
        {
          'property': 'og:image',
          'content': 'https://media.graphcms.com/resize=w:512,h:512,f:max/' + this.imageHandle
        },
        {
          'property': 'og.url',
          'content': 'https://strizich.design/post/' + this.$route.params.slug
        }
      ]
    }
  },
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
  components: { Loading, FeaturedImage, ArticleMast, VueMarkdown, ArticleStatus },
  computed: {
    imageHandle: function () {
      if (this.post.introImage) {
        return this.post.introImage.handle
      }
    }
  }
}
</script>

<style lang="scss">
.post{
  padding-bottom:32px;
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
    pre[class*="language-"] {
      margin-bottom:16px;
    }
    pre > code{
      -webkit-overflow-scrolling: touch;
      margin-bottom: 100px;
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
  .slide{
    &-enter{
      opacity:0;
      &-from{
        transition: transform .23s;
        transition-delay: .23s;
      }
    }
    &-leave{
      &-to{
        opacity:0;
        transition: transform .23s;
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
    .post__content{
      padding: 16px;
    }
    .image__group{
      margin-left:-16px;
      margin-right:-16px;
    }
  }

  // a comment
</style>
