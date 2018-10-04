<template>
    <div class="all-posts container">
      <router-link class="post" :to="`/post/${post.slug}`" tag="article" v-for="post in posts" v-bind:key="post.id" v-if="posts">
        {{featured}}
        <div class="post__image">
          <img :src="`https://media.graphcms.com/resize=w:256,h:256,f:crop/${post.featuredImage.handle}`"/>
        </div>
        <div class="post__details">
          <h3>{{post.title}}</h3>
          <vue-markdown>{{post.content | truncate(180)}}</vue-markdown>
        </div>
        {{post.featured ? 'Featured': ''}}
      </router-link>
      <loading v-else/>
    </div>
</template>
<script>
import Posts from '@/graphql/Posts.graphql'
import VueMarkdown from 'vue-markdown'
import Loading from '@/components/Loading.vue'
export default {
  name: 'AllPosts',
  data: () => ({
    loading: 0,
    first: 20,
    skip: 0
  }),
  apollo: {
    posts: {
      query: Posts,
      variables () {
        return {
          first: this.first,
          skip: this.skip
        }
      }
    }
  },
  components: { VueMarkdown, Loading }
}
</script>
<style lang="scss" scoped>
  .post{
    display:flex;
    &__details{
      padding:16px;
      h2{
        font-size: 16px;
      }
      p, li{
        font-size: 14px;
      }
    }
  }
</style>
