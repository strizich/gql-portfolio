<template>
  <div class="home">
    <div v-if="caseStudies">
        <card v-bind="caseStudy" :url="imgUrl" v-for="caseStudy in caseStudies" v-bind:key="caseStudy.id" />
    </div>
     <loading v-else/>
  </div>
</template>

<script>
import caseStudies from '@/graphql/CaseStudies.graphql'
import Card from '@/components/Card.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    postCount: null,
    imgUrl: 'img/onemv_dispatch_feature.png'
  }),
  apollo: {
    $loadingKey: 'loading',
    caseStudies: {
      // graphql/CaseStudies.graphql
      query: caseStudies,
      variables: {
        first: 5,
        skip: 0
      }
    }
  },
  components: { Loading, Card }
}
</script>

<style lang="scss" scoped>

</style>
