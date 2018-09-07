<template>
  <div class="case__mast">
      <div class="case__mast__header">
        <h1 class="text__headline">{{title}}</h1>
        <p class="text__lead">{{postType}}</p>
      </div>
      <div class="case__mast__wrapper container-fluid">
         <div class="case__mast__content">
        <!-- <featured-image :caseImage="caseImage"/> -->
        <img class="case__image" v-if="introImage" :src="`https://media.graphcms.com//${introImage.handle}`"/>
        <div class="case__details">
          <h4 class="case__label">Overview</h4>
          <p class="case__text">{{overview}}</p>
          <h4 class="case__label">My Role</h4>
          <ul class="case__list">
            <li class="case__text" v-for="myRole in role" v-bind:key="myRole">{{myRole}}</li>
          </ul>
          <h4 class="case__label">Launch Date</h4>
          <p class="case__text">{{updatedAt | moment("MMM YYYY")}}</p>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import FeaturedImage from '@/components/FeaturedImage'

export default {
  name: 'ArticleMast',
  props: [
    'postType',
    'introImage',
    'title',
    'role',
    'overview',
    'backgroundColor',
    'updatedAt'
  ],
  components: {
    FeaturedImage
  },
  filters: {
    truncate: function (value) {
      if (!value) return ''
      value = value.toString()
    }
  }
}
</script>
<style lang="scss" scoped>
.case{
  margin: 0 auto;
  position: relative;
  &__image{
    width:100%;
    height:100%;
    min-width:50%;
    min-height:50%;
    max-width:100%;
    max-height:100%;
    flex-grow: 1;
  }
  &__label{
    font-size: 14px;
    font-weight: 300;
  }
  &__text{
    font-size: 16px;
    font-weight: 100;
  }
  &__details{
    padding:16px;
    width:100%;
    flex-grow: 2
  }
  &__mast{
    position: relative;
    &__header{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      padding: 64px 16px 16px 16px;
    }
    &__wrapper{
      background:#000;
    }
    &__content{
      max-width:1024px;
      width:100%;
      display:flex;
      padding: 16px;
      z-index: 1;
      position: relative;
      color:#fff;
      margin:0 auto;
    }
  }
}

@media (max-width: 576px) {
  .case__mast__content{
    display:block;
  }
}
</style>
