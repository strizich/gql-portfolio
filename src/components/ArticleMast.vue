<template>
  <div class="case__mast">
      <div class="case__mast__header">
        <h1 class="text__headline">{{title}}</h1>
        <p class="text__lead">{{postType}}</p>
      </div>
      <div class="case__mast__content">
        <featured-image :caseImage="caseImage"/>
        <div class="case__details">
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="text__label">Overview</h4>
              <p class="text">{{overview}}</p>
            </div>
            <div class="col-sm-12 col-md-4">
              <h4 class="text__label">My Role</h4>
              <ul class="text__list">
                <li class="text" v-for="myRole in role" v-bind:key="myRole">{{myRole}}</li>
              </ul>
              <h4 class="text__label">Launch Date</h4>
              <p class="text">{{updatedAt | moment("MMM YYYY")}}</p>
            </div>
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
  font-size: 16px;
  font-weight: 300;
  line-height:1.3;
  letter-spacing: .75px;
  &__headline{
    color: #6D6D72;
    font-size: 36px;
    margin-bottom:0;
    font-weight: 300;
  }
  &__large{
    font-size: 28px;
    font-weight: 100;
  }
  &__lead{
    font-size: 14px;
    text-transform: uppercase;
    font-weight:500;
  }
  &__label{
    font-size: 14px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom:8px;
    margin-top:16px;
  }
  &__list{
    padding:0;
    list-style-type: none;
    li{
      border-bottom:1px solid rgba(255,255,255,.15);
      padding: 8px 0;
      &:last-child{
        border-width:0;
      }
    }
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
      max-width: 1024px;
      width: 100%;
      margin: 16px auto 0;
      padding: 0 16px;
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
