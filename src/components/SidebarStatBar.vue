<template>
  <div :id="name" class="bar__wrapper" v-b-tooltip.top="`${description}`" variant="primary">
    <div class="bar__container">
      <span class="bar__fill"></span>
      <span class="bar__line"></span>
    </div>
    <div class="bar__value">
      <strong><slot></slot></strong> <span>{{ x }} / 100</span>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'StatBar',
  x: '0',
  data: () => ({
    duration: '1000'
  }),
  methods: {
    bar: function () {
      anime({
        targets: '#' + this.name + ' ' + '.bar__fill',
        left: [
          { value: this.x + '%', duration: this.duration, delay: this.delay, elasticity: 100 }
        ],
        scaleY: [
          { value: 1, delay: this.delay },
          { value: 1.5, duration: 400, elasticity: 100 }
        ],
        loop: false
      })
    },
    line: function () {
      anime({
        targets: '#' + this.name + ' ' + '.bar__line',
        width: [
          { value: this.x + '%', duration: this.duration, delay: this.delay, elasticity: 100 }
        ]
      })
    }
  },
  mounted () {
    this.bar()
    this.line()
  },
  props: [
    'x', 'delay', 'name', 'description'
  ]
}
</script>

<style lang="scss">
  .bar{
    &__wrapper{
      position: relative;
      padding:8px 16px;
      border-bottom:1px solid rgba(0,0,0,.1);
      transition: background .23s;
      &:hover{
        background-color:#efefef;
      }
    }
    &__title{
      font-size:14px;
      margin-bottom:4px;
      font-weight: 500;
    }
    &__container{
      position: relative;
      height:4px;
      background-color: #fff;
    }
    &__fill{
      position:absolute;
      width:2px;
      height:4px;
      background:#C86DD7;
      transform: rotate(45deg);
    }
    &__line{
      position:absolute;
      width:4px;
      height:4px;
      background-image: linear-gradient(-134deg, #C86DD7 0%, #3023AE 100%);

    }
    &__value{
      font-size: 11px;
      display:flex;
      justify-content: space-between;
      padding-top: 4px;
    }
  }
</style>
