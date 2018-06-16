<template>
    <div class="project">{{project}}</div>
</template>

<script>
import { PROJECT } from '../queries/projects.js';
export default {
  name: 'project',
  data: () => ({
    loading: 0,
    project:null,
    slug: null,
  }),
  apollo: {
    $loadingKey: 'Loading',
    project: {
      query: PROJECT,
      variables () {
        return 
        slug: this.$route.params.slug 
      }
    }
  }
};
</script>
