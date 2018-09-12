<template>
<div class="case">
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
  <transition name="slide" appear mode="out-in">
    <div class="case__status" v-if="post.status=='DRAFT' && !hideMe">
      <button class="btn btn__close" v-on:click="hideMe = !hideMe"></button>
      <div class="case__status--content">
        <p class="text__lead">This entry is still a work in progress.</p>
        <p>Subject matter, grammer and structure may change drasticly in the future.</p>
      </div>
    </div>
  </transition>
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
  data: () => ({
    hideMe: false
  }),
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
.btn__close{
  padding:8px;
  align-self: center;
  display:block;
  width:32px;
  height:32px;
  margin:16px;
}
.case{
  padding-bottom:32px;
  &__wrapper{
    padding-top:32px;
    max-width: 1024px;
    margin:0 auto;
  }
  &__status{
    width:100%;
    position:sticky;
    z-index: 100;
    background:#000;
    color:#fff;
    bottom: 0;
    left:0;
    right:0;
    margin-bottom:-32px;
    height:64px;
    display:flex;
    align-items:center;
    padding:0;
    button{
      width:32px;
    }
    p{
      margin:4px 8px;
      font-weight: 300;
      letter-spacing: .75px;
      font-size: 11px;
    }
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
      transform: translateY(64px);
      &-from{
        transition: transform .23s;
        transition-delay: .23s;
      }
    }
    &-leave{
      &-to{
        transform: translateY(64px);
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
    .case__content{
      padding: 16px;
    }
    .image__group{
      margin-left:-16px;
      margin-right:-16px;
    }
  }

  // a comment
</style>
