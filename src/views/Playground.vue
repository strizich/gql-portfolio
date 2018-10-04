<template>
    <div class="all-posts container">
           <carousel :perPage="1" v-if="posts">
            <slide v-for="post in posts" v-bind:key="post.id">
              <img class="slide__img" :src="image(post)"/>
            </slide>
          </carousel>
          <loading v-else/>
      </div>
</template>
<script>
import Posts from '@/graphql/Posts.graphql'
import VueMarkdown from 'vue-markdown'
import Loading from '@/components/Loading.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'Playground',
  data: () => ({
    loading: 0,
    first: 20,
    skip: 0,
    maxWidth: 512,
    maxHeight: 512,
    fit: 'crop'
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
  methods: {
    image: function (item) {
      return 'https://media.graphcms.com/resize=' + this.width(item) + ',' + this.height(item) + ',fit:crop/' + item.featuredImage.handle
    },
    width: function (item) {
      if (item.featuredImage.width >= this.maxWidth) {
        return 'w:' + this.maxWidth
      } else {
        return 'w:' + item.featuredImage.width
      }
    },
    height: function (item) {
      if (item.featuredImage.height >= this.maxHeight) {
        return 'h:' + this.maxHeight
      } else {
        return 'h:' + item.featuredImage.height
      }
    }
  },
  components: { VueMarkdown, Loading, Carousel, Slide }
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
  .slide{
    &__img{
      width:100%;
    }
  }
</style>
