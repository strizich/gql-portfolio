<template>
  <div class="stat__bar">
    <div class="bar__container">
      <span class="bar__fill" :style="`width: ${endWidth.width}%`"></span> <span>{{ endWidth.width }}</span>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'StatBar',
  data: () => ({
    endWidth: {
      width: '0'
    }
  }),
  methods: {
    animate: function () {
      anime({
        targets: this.endWidth,
        width: '100',
        duration: function (el, i, l) {
          return 1000 + (i * 1000)
        },
        easing: 'linear'
      })
    }
  },
  mounted () {
    this.animate()
  },
  props: [
    'width'
  ]
}
</script>

<style lang="scss">
  .stat{
    &__bar{
      padding: 8px
    }
  }

  .bar{
    &__container{
      position: relative;
      height:16px;
    }
    &__fill{
      position:absolute;
      top:4px;
      bottom: 4px;
      left:0;
      border-radius: 30px;
      background:rgb(65, 0, 40);
    }
  }
</style>
