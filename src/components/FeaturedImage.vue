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
            box-shadow: 0 -20px 20px -20px rgba(0,0,0,.3);
            max-height:300px;
            height:300px;
            background-size:cover;
            text-indent: -10000px;
    }
  }
</style>
