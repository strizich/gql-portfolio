<template>
  <div class="about">
    <p>{{description}}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: 'Hello World',
    description: 'here there'
  }),
  render: function (createElement) {
    return createElement('h1', this.title)
  }
}
</script>
