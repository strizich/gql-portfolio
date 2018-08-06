<template>
  <ApolloQuery
    :query="require('@/graphql/CaseStudies.graphql')"
    :variables="{first: 1, skip:0, featured: true}">
    <template slot-scope="{ result: {loading, data} }">
        <Loading v-if="loading"/>
        <div v-else>
          <div v-for="data of data.caseStudies" v-bind:key="data.id">
            <p>{{data.title}}</p>
            <p>{{data.postType}}</p>
            <img v-for="image of data.featuredImage"  v-bind:key="image.id" src="`${image.url}`"/>
          </div>
        </div>
    </template>
  </ApolloQuery>
</template>

<script>
// import gql from 'graphql-tag'
import Loading from '../components/Loading.vue'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'StudyCard',
  data: () => ({
  }),
  components: { VueMarkdown, Loading }
}
</script>

<style lang="scss" scoped>
</style>
