<template>
  <div class="card">
    <div class="card__wrapper">
      <img class="card__image" :src="url"/>
      <div class="card__info">
        <div class="card__info--left">
          <h2 class="text__title">{{title}}</h2>
          <p class="text__lead">{{postType}}</p>
        </div>
        <div class="card__info--right">
          <small class="text__sm">{{updatedAt | moment("dddd, MMM Do YYYY, h:mm a")}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Card',
  data: () => {},
  props: {
    title: String,
    postType: String,
    slug: String,
    updatedAt: String,
    content: String,
    url: String,
    featured: Boolean
  },
  components: { VueMarkdown }
}
</script>

<style lang="scss" scoped>
  .text{
    &__title {
      font-size: 17px;
    }
    &__lead {
      font-size: 14px;
    }
    &__sm {
      font-size: 11px;
    }
  }
  .card{
      width: 100%;
      z-index: 1;
      position: relative;
      margin: 34px auto;
      &__wrapper{
        border:1px solid #efefef;
        box-shadow: 0 20px 20px -10px rgba(0,0,0,.15), 0 20px 15px -20px rgba(0,0,0,.25);
      }
      &__info{
        display:flex;
        justify-content: space-between;
        padding: 16px 8px;
      }
      &__image{
        width:100%;
      }
  }
</style>
