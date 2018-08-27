<template>
  <div class="home">
    <home-intro/>
    <div class="container-fluid" >
      <div class="samples container">
        <div class="sample" v-for="sample in samples" v-bind:key="sample.id">
          <div v-for="image in sample" v-bind:key="image.id" v-if="image.url" class="sample__image" :style="`background-image: url(${image.url});`"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid" v-if="caseStudies">
      <div class="cards container">
        <h5 class="cards__section">Case Studies</h5>
          <div class="cards__group row">
            <article-card v-bind="caseStudy" v-for="caseStudy in caseStudies" v-bind:key="caseStudy.slug" class="col-sm-12 col-md-6 col-lg-4" />
          </div>
      </div>
    </div>

    <loading v-else />
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue'
import samples from '@/graphql/Samples.graphql'
import caseStudies from '@/graphql/CaseStudies.graphql'
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import VueGallery from 'vue-gallery'

export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    samples: {},
    imageUrls: [],
    i: 0,
    index: null,
    url: null
  }),
  apollo: {
    $loadingKey: 'loading',
    caseStudies: {
      query: caseStudies,
      variables: {
        first: 6,
        skip: 0
      }
    },
    samples: {
      query: samples
    }
  },
  components: { Loading, ArticleCard, VueGallery, HomeIntro },
  methods: {
    getImages: function () {
      for (let i = 0; i < this.samples.length; i++) {
        const sampleGroup = this.samples[i].images
        for (let j = 0; j < sampleGroup.length; j++) {
          const sampleImage = this.samples[i].images[j].url
          this.imageUrls.push(sampleImage)
        }
      }
      return this.imageUrls
    }
  },
  mounted () {
    this.getImages()
  }
}
</script>

<style lang="scss" scoped>
  .samples{
    display:flex;
    flex-wrap: wrap;
    width:100%;
  }
  .sample{
    &__image{
      width: 130px;
      height:130px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left center;
      margin:16px;
    }
  }
  .cards{
    margin:0 auto;
    &__group{
      display:flex;
    }
    &__section{
      margin-bottom: 16px;
      margin-top:64px;
    }
  }
</style>
