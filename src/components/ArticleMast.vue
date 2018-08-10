<template>
  <div class="case__mast">
      <div class="case__mast__header">
        <h1>{{title}}</h1>
        <p class="lead">{{postType}}</p>
      </div>
      <div class="case__mast__content">
        <featured-image :caseImage="caseImage"/>
        <div class="case__details">
          <vs-row>
            <vs-col vs-xs="12" vs-w="6">
              <h4 class="text__label">Overview</h4>
              <p class="text">{{overview}}</p>
            </vs-col>
            <vs-col vs-xs="12" vs-w="3">
              <h4 class="text__label">My Role</h4>
              <p class="text" v-for="myRole in role" v-bind:key="myRole">{{myRole}}</p>
            </vs-col>
            <vs-col vs-xs="12" vs-w="3">
              <h4 class="text__label">Launch Date</h4>
              <p class="text__large">{{updatedAt | moment("MMM YYYY")}}</p>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
</template>

<script>
import FeaturedImage from '@/components/FeaturedImage'
export default {
  name: 'ArticleMast',
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
    FeaturedImage
  }
}
</script>
<style lang="scss" scoped>
.vs-col{
  padding:8px;
}
.text{
    font-size: 14px;
    font-weight: 300;
    line-height:1.3;
    letter-spacing: .75px;
    &__large{
      font-size: 42px;
      font-weight: 100;
    }
    &__label{
      font-size: 11px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom:8px;
      margin-top:16px;
    }
  }

.case{
  margin: 0 auto;
  position: relative;
  &__mast{
    padding-bottom: 32px;
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
      padding: 32px 16px;
    }
    &__content{
      max-width:1024px;
      width:100%;
      padding:0 16px;
      z-index: 1;
      position: relative;
      color:#fff;
      margin:0 auto;
    }
  }
}
</style>
