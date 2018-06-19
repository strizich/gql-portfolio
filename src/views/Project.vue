<template>
    <div class="project">
      <div class="placeholder__image">
        Image goes here
      </div>
      <vs-topbar vs-color="primary">
        <vs-button vs-color-text="rgb(255, 255, 255)" vs-type="dark-flat" vs-radius="50%" vs-icon="menu"></vs-button>
        <h4>{{project.name}}</h4>
        <div v-for="tool in project.tools" v-bind:key="tool.id" style="margin-left: auto; padding-right:16px">
      {{tool.name}}
    </div>
      </vs-topbar>
    
    <div class="project__description" v-html="project.description"></div>

    </div>
</template>

<script>
  import { PROJECT } from '../queries/projects.js';
    
  export default {
    title: 'project',
    data: () => ({
      loading: 0,
      name:'',
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


<style lang="scss" >
  .placeholder__image{
    height:100vh;
    max-height:600px;
    width:100%;
    max-width: 1440px;
    margin:0 auto;
    background:#efefef;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>