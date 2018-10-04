<template>
  <router-link :to="`/post/${slug}`">
    <div class="article-card">
      <div class="article-card__wrapper">
        <img class="article-card__image" v-if="featuredImage" :src="`https://media.graphcms.com//${featuredImage.handle}`" :alt="title"/>
        <div class="article-card__info">
            <h2 class="card__title">{{title}}</h2>
            <p class="card__lead">{{postType}}</p>
            <div class="article-card__group">
              <div class="article-card__info--left">
                 <span class="card__date">{{createdAt | moment("MMM D YYYY, h:mm a")}}</span>
              </div>
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
    width: String,
    featuredImage: Object,
    createdAt: String
  }
}
</script>

<style lang="scss" scoped>
  .card{
    &__title {
      font-size: 20px;
      color:#000;
      margin-bottom:0;
    }
    &__label{
      font-size: 11px;
      margin-bottom:0;
      margin-top:0;
    }
    &__lead {
      font-size: 14px;
      color:#000;
      margin-bottom:0px;
    }
    &__flex {
      display:flex;
      justify-content: space-between;
      width:100%;
    }
    &__date{
      text-transform: uppercase;
      letter-spacing: .75px;
      margin-top:8px;
    }
    &__sm {
      font-size: 11px;
      color:rgba(0,0,0,.5);
      margin-bottom:0;
      &:hover{
        text-decoration: none;
      }
    }
  }
  .article-card{
      z-index: 1;
      position: relative;
      color:#000;
      &__wrapper{
        &:hover{
          .article-card__info{
            opacity:1;
            background: rgba(255,255,255, .85);
          }
        }
      }
      &__info{
        padding: 16px;
        background: #fff;
        opacity:0;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        transition: all .3s;
        display: flex;
        justify-content: center;
        flex-direction: column;
        &--left{
          display:flex;
          flex-direction: column;
          font-size: 11px;
        }
        &--right{
          display:flex;
          flex-direction: column;
          font-size: 11px;
        }
         &__group{
          display:flex;
        }
      }
      &__image{
        width:100%;
        height:100%;
        max-width: 512px;
      }
  }

  @media (max-width: 576px) {
    .article-card__info{
      opacity:1;
      position:static;
    }
  }
</style>
