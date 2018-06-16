<template>
    <div class="project">
    <h1>{{project.name}}</h1>
    <div class="project" v-html="project.description"></div>
    <div v-for="tool in project.tools" v-bind:key="tool.id">
      {{tool.name}}
      {{tool.id}}
    </div>
    </div>
</template>

<script>
import { PROJECT } from '../queries/projects.js';
   
export default {
  name: 'project',
  data: () => ({
    loading: 0,
  }),
  apollo: {
    $loadingKey: 'Loading',
    project: {
      query: PROJECT,
      variables () { 
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
};
</script>
