<template>
  <div class="article-mast">
    <div class="article-mast--group">
       <div class="article-mast__header">
        <h1 class="text__headline">{{title}}</h1>
        <p class="text__lead">{{postType}}</p>
      </div>
      <div class="article-mast__wrapper container-fluid">
         <div class="article-mast__content">
        <div class="article-mast__image__container">
          <img class="article-mast__image" v-if="introImage" :src="`https://media.graphcms.com/resize=w:512,h:512,f:max/${introImage.handle}`" :alt="title"/>
        </div>
        <div class="article-mast__details" v-if="mast">
          <h4 class="article-mast__label">Overview</h4>
          <p class="article-mast__text">{{mast.overview}}</p>
          <h4 class="article-mast__label">My Role</h4>
          <ul class="article-mast__list">
            <li class="article-mast__text" v-for="(myRole, index) in mast.role" :key="index">{{myRole}}</li>
          </ul>
          <h4 class="article-mast__label">Launch Date</h4>
          <p class="article-mast__text">{{mast.launchDate | moment("MMM YYYY")}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticleMast',
  props: [
    'mast',
    'postType',
    'introImage',
    'title',
    'role',
    'overview',
    'backgroundColor',
    'updatedAt'
  ],
  filters: {
    truncate: function (value) {
      if (!value) return ''
      value = value.toString()
    }
  }
}
</script>
<style lang="scss" scoped>

.article-mast{
  margin: 0 auto;
  position: relative;
  &__header{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 64px 16px 16px 16px;
    min-height:160px;
  }
  &__wrapper{
    background:#000;
    min-height:300px;
  }
  &__content{
    max-width:1024px;
    width:100%;
    display:flex;
    padding: 16px 0;
    z-index: 1;
    position: relative;
    color:#fff;
    margin:0 auto;
  }
  &__image__container{
    min-width:50%;
    min-height:50%;
    max-width:512px;
    max-height:512px;
    flex-grow: 1;
    text-align: center;
    display:flex;
    align-items:center;
    img{
      max-width:100%;
      margin: 0 auto;
    }
  }
  &__label{
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .75px;
    opacity: .75;
  }
  &__text{
    font-size: 14px;
    font-weight: 100;
    letter-spacing: .75px;
  }
  &__details{
    padding:16px;
    width:100%;
    flex-grow: 2
  }
}
@media (max-width: 576px) {
  .article-mast__content{
    display:block;
  }
}
</style>
