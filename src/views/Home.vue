<template>
  <div class="home">
    <router-link v-for="data in caseStudies" v-bind:key="data.id" :to="`/case/${data.id}`">
      <FeaturedCard v-bind="data" />
    </router-link>
  </div>
</template>

<script>
// import StudyCard from '../components/StudyCard.vue'
import Loading from '../components/Loading.vue'
import FeaturedCard from '@/components/Featured.vue'
import caseStudies from '@/graphql/CaseStudies.graphql'

// import gql from 'graphql-tag'

export default {
  name: 'home',
  loading: false,
  data: () => ({
    loading: 0,
    data: null,
    postCount: null
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
  components: { Loading, FeaturedCard }
}
</script>

<style lang="scss" scoped></style>
