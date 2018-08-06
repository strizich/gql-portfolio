<template>
  <span :class="type">
    {{date | moment("`${format}`")}}
  </span>
</template>

<script>
export default {
  name: 'articleDate',
  props: [
    'date',
    'format',
    'type'
  ]
}
</script>
<style lang="scss" scoped>

</style>
