<template>
    <div id="loading" >
        <span class="el"></span>
        <span class="el2"></span>
        <span class="el3"></span>
        <span class="el4"></span>
    </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Loading',
  methods: {
    spin: function () {
      anime({
        targets: '#loading .el',
        loop: true,
        duration: 2000,
        elasticity: 400,
        translateX: [
          {value: -4},
          {value: 8},
          {value: 0}
        ],
        translateY: [
          {value: -4},
          {value: -8},
          {value: 0}
        ]
      })
    },
    spin2: function () {
      anime({
        targets: '#loading .el2',
        loop: true,
        duration: 2000,
        elasticity: 400,
        translateX: [
          {value: 4},
          {value: -8},
          {value: 0}
        ],
        translateY: [
          {value: 4},
          {value: 8},
          {value: 0}
        ]
      })
    },
    spin3: function () {
      anime({
        targets: '#loading .el3',
        loop: true,
        duration: 2000,
        elasticity: 400,
        translateX: [
          {value: -4},
          {value: -8},
          {value: 0}
        ],
        translateY: [
          {value: 4},
          {value: -8},
          {value: 0}
        ]
      })
    },
    spin4: function () {
      anime({
        targets: '#loading .el4',
        loop: true,
        duration: 2000,
        elasticity: 400,
        translateX: [
          {value: 4},
          {value: 8},
          {value: 0}
        ],
        translateY: [
          {value: -4},
          {value: 8},
          {value: 0}
        ]
      })
    },
    spin5: function () {
      anime({
        targets: '#loading',
        loop: true,
        duration: 2000,
        elasticity: 0,
        easing: 'easeInOutSine',
        rotate: [
          {value: 1080}
        ]
      })
    }
  },
  mounted () {
    this.spin()
    this.spin2()
    this.spin3()
    this.spin4()
    this.spin5()
  }
}
</script>
<style lang="scss" scoped>
    #loading{
      position:fixed;
      top:50%;
      left:50%;
      margin: -8px 0 0 -8px;
      width:16px;
      height:16px;
      .el{
        display:block;
        width:16px;
        height:16px;
        background-size: contain;
        position:absolute;
        left: 50%;
        top:50%;
        margin-top: -8px;
        margin-left: -8px;
        background: rgba(144,19,254,0.5);
        border-radius: 30px;
      }
      .el2{
        @extend .el;
      }
      .el3{
        @extend .el;
      }
      .el4{
        @extend .el;
      }
    }
</style>
