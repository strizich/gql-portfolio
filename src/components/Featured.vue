<template>
  <div class="allProjects">
      <section class="featured" v-if="allProjects">
          <div class="featured__project" v-for="project in allProjects" :key="project.id">
            <div class="featured__image">
              <p>Placeholder</p>
            </div>
            <div class="featured__content">
              <h2>{{project.name}}</h2>
              <VueMarkdown>{{project.shortDescription}}</VueMarkdown>
              <ul class="tools">
                <li v-for="tool in project.tools" :key="tool.id" class="tool__item">
                  <span class="chip" v-tooltip="{text: tool.description}"><img :src="tool.icon.url" width="16" height="16" v-if="tool.icon"/> {{ tool.name }}</span>
                </li>
              </ul>
              <router-link tag="div" class="featured__cta" :vs-color="colorx" :vs-gradient-color-secondary="colorx2" :to="`/project/${project.slug}`">
                <vs-button class="d-block" :vs-color="colorx" :vs-gradient-color-secondary="colorx2" vs-type="gradient">Details</vs-button>
              </router-link>
            </div>
          </div>
          <div v-if="projectCount && projectCount > allProjects.length">
            <vs-button class="d-block" vs-type="flat" @click="loadMoreProjects"> {{ loadingProjects ? 'Loading...' : 'Show More' }}</vs-button>
          </div>
      </section>
      <Loading v-else/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Loading from '../components/Loading.vue'
import { ALL_PROJECTS } from '../queries/projects.js'
import VueMarkdown from 'vue-markdown'
const PROJECTS_PER_PAGE = 3

export default {
  name: 'FeaturedProject',
  data: () => ({
    loading: 0,
    allProjects: null,
    projectCount: null,
    loadingProjects: 0,
    tools: [],
    colorx: '#c72a75',
    colorx2: '#5252e8'
  }),
  apollo: {
    $loadingKey: 'loadingProjects',
    allProjects: {
      query: ALL_PROJECTS,
      variables: {
        skip: 0,
        first: PROJECTS_PER_PAGE
      }
    },
    projectCount: {
      query: gql`{ _allProjectsMeta {count} }`,
      update: ({ _allProjectsMeta }) => _allProjectsMeta.count
    }
  },
  methods: {
    loadMoreProjects () {
      this.$apollo.queries.allProjects.fetchMore({
        variables: {
          skip: this.allProjects.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allProjects: [...previousResult.allProjects, ...fetchMoreResult.allProjects]
          })
        }
      })
    }
  },
  components: { VueMarkdown, Loading }
}
</script>

<style lang="scss" scoped>
  .d-block{
    display:block;
    width:100%;
  }
  .featured{
    &__content{
      width:300px;
      padding-top:56px;
    }
    &__image{
      height:600px;
      width:100%;
    }
    &__project{
      max-height: 600px;
      display:flex;
      width:100%;
    }
    &__cta{
      margin-top:16px;
    }
  }
  .tools{
    list-style: none;
    padding: 0;
    display:flex;
    justify-content: center;
    flex-direction: column;
  }
  .tool{
    &__item{
      padding: 0;
      margin-right:8px;
    }
  }
  .icon{
    display:block;
    width:16px;
    height:16px;
    background-size: contain;
  }
  .chip{
    display: flex;
    padding:4px 8px;
    font-size: 12px;
    align-items: center;
    background-color:#000000;
    color:#fff;
    border-radius: 30px;
    min-height: 24px;
    img{
      margin-right: 4px;
    }
  }
</style>
