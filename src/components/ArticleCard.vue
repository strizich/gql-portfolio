<template>
  <router-link :to="`/post/${slug}`">
    <div class="article-card">
      <div class="article-card__wrapper">
        <img class="article-card__image" v-if="featuredImage.url" :src="featuredImage.url"/>
        <div class="article-card__info">
          <div class="article-card__info--left">
            <h2 class="text__title">{{title}}</h2>
            <p class="text__lead">{{postType}}</p>
            <small class="text__sm">{{updatedAt | moment("dddd, MMM Do YYYY, h:mm a")}}</small>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'ArticleCard',
  props: {
    id: String,
    title: String,
    postType: String,
    slug: String,
    updatedAt: String,
    caseImg: String,
    featured: Boolean,
    url: String,
    featuredImage: Object
  }
}
</script>

<style lang="scss" scoped>
  .text{
    &__title {
      font-size: 24px;
      color:#000;
      margin-bottom:0;
    }
    &__lead {
      font-size: 14px;
      color:#000;
      margin-bottom:0px;
    }
    &__sm {
      font-size: 11px;
      color:rgba(0,0,0,.5);
      &:hover{
        text-decoration: none;
      }
    }
  }
  .article-card{
      z-index: 1;
      position: relative;

      &__wrapper{
        &:hover{
          .article-card__info{
            opacity:1;
            background: rgba(255,255,255, .75);
          }
        }
      }
      &__info{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background: #fff;
        opacity:0;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        transition: all .3s;
      }
      &__image{
        width:100%;
        height:100%;
      }
  }

  @media (max-width: 576px) {
    .article-card__info{
      opacity:1;
      position:static;
    }
  }
</style>
