<template>
  <div class="featuredPost">
    <div class="postWrapper">
      <img src="`${url}`">
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
  name: 'FeaturedCard',
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

<style lang="scss" scoped></style>
