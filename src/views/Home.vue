<template>
  <div class="home">
    <vs-row vs-w="12">
      <vs-col vs-w="8" vs-offset="2" v-for="data in caseStudies" v-bind:key="data.id">
      <router-link :to="`/case/${data.id}`">
        <card v-bind="data" :url="imgUrl"/>
      </router-link>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import Card from '@/components/Card.vue'
import caseStudies from '@/graphql/CaseStudies.graphql'

export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    data: null,
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
