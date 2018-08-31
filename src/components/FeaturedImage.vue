<template>
    <div class="case__image" :style="`background-image:url(${caseImage})`">
      {{caseImage}}
    </div>
</template>

<script>
export default {
  name: 'FeatureImage',
  props: [
    'caseImage'
  ]
}
</script>
<style lang="scss" scoped>
   .case{
     &__image{
        text-align: center;
        width:100%;
        max-width:512px;
        width:100%;
        min-height:100%;
        background-size:contain;
        background-position: center center;
        text-indent: -10000px;
    }
  }
  @media (max-width: 576px) {
  .case{
     &__image{
       height:512px;
     }
  }
}
</style>
