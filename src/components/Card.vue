<template>
  <div class="card">
    <div class="card__wrapper">
      <img class="card__image" :src="url"/>
      <div class="cardInfo">
        <h2>{{title}}</h2>
        <p class="lead">{{postType}}</p>
        <small>{{updatedAt | moment("dddd, MMMM Do YYYY, h:mm a")}}</small>
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
  .card{
      max-width:1024px;
      width: 100%;
      z-index: 1;
      position: relative;
      padding: 0 120px;
      margin: 34px auto;
      &__image{
        width:100%;
      }
  }
</style>
