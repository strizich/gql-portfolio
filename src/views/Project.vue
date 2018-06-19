<template>
  <section>
    <div class="project" v-if="project">
      <div class="project__image">
        Image goes here
      </div>
      <div class="project__content">
        <VueMarkdown class="project__description">
          {{project.shortDescription}}
        </VueMarkdown>
        <ul>
          <li v-for="tool in project.tools" v-bind:key="tool.id">{{tool.name}}</li>
        </ul>
      </div>
    </div>
    <Loading v-else/>
  </section>
</template>

<script>
import Loading from '../components/Loading.vue'
import VueMarkdown from 'vue-markdown'
import { PROJECT } from '../queries/projects.js'

export default {
  name: 'project',
  data: () => ({
    tools: [],
    loading: false
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
  components: { Loading, VueMarkdown }
}
</script>

<style lang="scss">
  .project{
    display:flex;
    margin-top:-54px;
    &__image{
      max-height: 100vh;
      width:100%;
      height:100vh;
      background:green;
    }
    &__content{
      width:300px;
      height:100vh;
      background:red;
    }
  }
</style>
