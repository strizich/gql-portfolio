<template>
  <div class="home">
    <router-link v-for="data in caseStudies" v-bind:key="data.id" :to="`/case/${data.id}`">
      <card v-bind="data" :url="imgUrl"/>
    </router-link>
  </div>
</template>

<script>
// import StudyCard from '../components/StudyCard.vue'
import Loading from '../components/Loading.vue'
import Card from '@/components/Card.vue'
import caseStudies from '@/graphql/CaseStudies.graphql'

// import gql from 'graphql-tag'

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

<style lang="scss" scoped></style>
