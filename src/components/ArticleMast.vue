<template>
  <div class="case__mast">
      <div class="case__mast__header">
        <h1>{{title}}</h1>
        <p class="lead">{{postType}}</p>
      </div>
      <div class="case__mast__content">
        <featured-image :caseImage="caseImage"/>
        <div class="case__details" >
          <div class="col">
            <h4>Overview</h4>
            <p class="text">{{overview}}</p>
          </div>
          <div class="col">
            <h4>My Role</h4>
            <p>{{role}}</p>
          </div>
          <div class="col">
            <h4>Launch Date</h4>
           <p class="text__large">{{updatedAt | moment("MMM YYYY")}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import featuredImage from '@/components/FeaturedImage'
export default {
  name: 'articleMast',
  props: [
    'imgUrl',
    'postType',
    'caseImage',
    'title',
    'role',
    'overview',
    'updatedAt'
  ],
  components: {
    featuredImage
  }
}
</script>
<style lang="scss" scoped>
.case{
  margin:0 auto;
  position: relative;
  &__mast{
    padding-bottom:32px;
    position: relative;
    &:before{
      background:#000;
      position:absolute;
      display:block;
      top: 30%;
      bottom:0;
      left:0;
      right:0;
      content:'';
      z-index: 0;
    }
    &__header{
      margin-top: 32px;
      max-width: 1024px;
      width: 100%;
      margin: 32px auto 0;
      padding-bottom: 32px;
    }
    &__content{
      max-width:1024px;
      width:100%;
      z-index: 1;
      position: relative;
      color:#fff;
      margin:0 auto;
    }
  }
  &__details{
    display:flex;
    justify-content: space-between;
  }
}
</style>
