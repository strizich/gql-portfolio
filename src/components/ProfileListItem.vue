<template>
  <div class="list__item">
    <span :class="`glyph glyph__${icon} glyph__${size}`">{{icon}}</span>
    <span class="list__content"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'ProfileListItem',
  props: [
    'icon',
    'size',
    'hasGlyph'
  ]
}
</script>

<style lang="scss">
.list{
  &__item{
    display: flex;
    align-content: center;
    margin-bottom:8px;
    &:last-child{
      margin-bottom:0;
    }
  }
  &__content{
    font-size: 13px;
    margin-left: 8px;
    font-weight: 300;
    letter-spacing: 0.2px;
  }
}
</style>
