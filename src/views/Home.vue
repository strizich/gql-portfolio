<template>
  <div class="home">

    {{$route.params}}
    <section v-if="allProjects">
        <div class="project" v-for="project in allProjects" :key="project.id">
          <router-link :to="`/project/${project.slug}`">
            <h2>{{project.name}}</h2>
            <div v-bind:html="project.description"></div>
            <ul class="tools">
              <li v-for="tool in project.tools" :key="tool.id" class="tool__item">
                <span class="chip" v-tooltip="{text: tool.description}"><img :src="tool.icon.url" width="16" height="16" v-if="tool.icon"/> {{tool.name}}</span>
              </li>
            </ul>
          </router-link>
           <vs-button vs-type="dark-flat" v-if="projectCount && projectCount > allProjects.length" @click="loadMoreProjects">{{loading ? 'Loading...' : 'Show More'}}</vs-button>
        </div>

    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { ALL_PROJECTS } from '../queries/projects.js';
const PROJECTS_PER_PAGE = 2;

export default {
  name: 'home',
  data: () => ({
    loading: 0,
    allProjects: null,
    projectCount: null,
    tools: '',
  }),
  apollo: {
    $loadingKey: 'Loading',
    allProjects: {
      query: ALL_PROJECTS,
      variables: {
        skip: 0,
        first: PROJECTS_PER_PAGE,
      },
      projectCount: {
        query: gql`{_allProjectsMeta {count}}`,
        update: ({_allProjectsMeta}) => _allProjectsMeta.count
      }
    }
  },
  methods: {
    loadMoreProjects() {
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
  }
};
</script>

<style lang="scss" scoped>
  .tools{
    list-style: none;
    padding: 0;
    display:flex;
    justify-content: center;
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