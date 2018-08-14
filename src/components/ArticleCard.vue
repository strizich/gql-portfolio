<template>
  <router-link :to="`/case/${slug}`">
    <div class="article-card">
      <div class="article-card__wrapper">
        <div class="article-card__image" v-if="featuredImage" :style="`background-image: url(${featuredImage.url});`"></div>
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
      width:100%;
      position: relative;
      margin: 34px 0;
      &__wrapper{
        box-shadow: 0 20px 20px -10px rgba(0,0,0,.15), 0 20px 15px -20px rgba(0,0,0,.25);
      }
      &__info{
        display:flex;
        justify-content: space-between;
        padding: 16px;
        background: #fff;
      }
      &__image{
        width:100%;
        height:300px;
        background-size: cover;
        background-position: center center;
      }
  }
</style>
