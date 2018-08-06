<template>
    <div class="case__image">
        <img v-bind:src="`${caseImage}`"/>
    </div>
</template>

<script>
export default {
  name: 'featureImage',
  props: [
    'caseImage'
  ]
}
</script>
<style lang="scss" scoped>
   .case{
     &__image{
        text-align: center;
        img{
            width:100%;
            box-shadow: 0 -20px 20px -20px rgba(0,0,0,.3);
        }
    }
  }
</style>
