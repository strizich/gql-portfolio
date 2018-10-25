<template>
<article class="container">
  <div class="blog-post">
    <h1 class="text__headline">{{latestUpdate.title}}</h1>
    <small>{{latestUpdate.createdAt | moment("MMM D YYYY, h:mm a")}}</small>
    <vue-markdown :source="latestUpdate.content"></vue-markdown>
  </div>
</article>
</template>

<script>
import BlogPost from '@/graphql/BlogPost.graphql'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'BlogPost',
  apollo: {
    latestUpdate: {
      query: BlogPost,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: {VueMarkdown}
}
</script>

<style lang="scss">
  .blog-post{
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
